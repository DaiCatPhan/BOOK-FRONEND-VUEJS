<script setup>
import { onMounted, ref, watch, watchEffect } from "vue";
import { InputNumber, Upload } from "ant-design-vue";
import ServiceApi from "../../../../../service/api.js";
import { toast } from "vue3-toastify";

const props = defineProps({
  closeModalUpdate: Function,
  fetchData: Function,
  isShowModalUpdate: Boolean,
  dataModalUpdate: Object,
});

const dataUpdate = ref({
  idProduct: "",
  TenHH: "",
  MoTaHH: "",
  Gia: 0,
  SoLuongHang: 0,
  GhiChu: "",
  TacGia: "",
  HinhHH: "",
  TheLoai: "",
});
const confirmLoading = ref(false);


const imagePage = ref("");

watchEffect(() => {
  dataUpdate.value.idProduct = props.dataModalUpdate._id || "";
  dataUpdate.value.TenHH = props.dataModalUpdate.TenHH || "";
  dataUpdate.value.MoTaHH = props.dataModalUpdate.MoTaHH || "";
  dataUpdate.value.Gia = props.dataModalUpdate.Gia || "";
  dataUpdate.value.SoLuongHang = props.dataModalUpdate.SoLuongHang || "";
  dataUpdate.value.GhiChu = props.dataModalUpdate.GhiChu || "";
  dataUpdate.value.TacGia = props.dataModalUpdate.TacGia || "";
  dataUpdate.value.HinhHH = props.dataModalUpdate.HinhHH || "";
  dataUpdate.value.TheLoai = props.dataModalUpdate.TheLoai || "";
  // Cập nhật các biến ref khác tương tự ở đây
  imagePage.value = props.dataModalUpdate.HinhHH || "";
});

// Xử lí hình ảnh
const handleChangeImage = (info) => {
  const file = info.file.originFileObj;
  dataUpdate.value.HinhHH = file;
};

// Goi API thanh cong xóa dữ liệu và đóng đi
const handleClose = () => {
  props.closeModalUpdate();
};

// Xử lí submit FORM
const handleOk = async () => { 
  try {
    const formData = new FormData();
    formData.append("idProduct", dataUpdate.value.idProduct);
    formData.append("TenHH", dataUpdate.value.TenHH);
    formData.append("MoTaHH", dataUpdate.value.MoTaHH);
    formData.append("Gia", parseInt(dataUpdate.value.Gia, 10));
    formData.append("SoLuongHang", parseInt(dataUpdate.value.SoLuongHang, 10));
    formData.append("GhiChu", dataUpdate.value.GhiChu);
    formData.append("TheLoai", dataUpdate.value.TheLoai);
    formData.append("TacGia", dataUpdate.value.TacGia);
    formData.append("HinhHH", dataUpdate.value.HinhHH);
    confirmLoading.value = true;
    const res = await ServiceApi.update_HANG_HOA(formData);
    confirmLoading.value = false;
    if (res && res.data && res.data.EC === 0) {
      toast.success("Cập nhật sách thành công");
      props.fetchData();
      handleClose();
    } else {
      toast.error(res.data.EM);
    }
  } catch (error) {
    console.log("error >>> ", error);
    return;
  }
};
</script>

<template>
  <div>
    <a-modal
      :open="props.isShowModalUpdate"
      title="Cập nhật  sách "
      @ok="handleOk"
      @cancel="closeModalUpdate"
      :style="{ top: '10px' }"
      :width="900"
    >
      <form>
        <div class="mb-3">
          <label class="form-label">Nhập tên sách</label>
          <input v-model="dataUpdate.TenHH" type="text" class="form-control" />
        </div>
        <div class="mb-3 row">
          <div class="col-6">
            <label class="form-label">Giá </label>
            <input v-model="dataUpdate.Gia" type="text" class="form-control" />
          </div>
          <div class="col-6">
            <label class="form-label">Thể loại</label>

            <select v-model="dataUpdate.TheLoai" class="form-select">
              <option disabled>Please select one</option>
              <option value="kinh tế">Kinh tế</option>
              <option value="tôn giáo">Tôn giáo</option>
              <option value="tiểu thuyết">Tiểu thuyết</option>
              <option value="truyện ngắn">Truyện ngắn</option>
              <option value="truyện cười">Truyện cười</option>
              <option value="sức khỏe">Sức khỏe</option>
            </select>
          </div>
        </div>
        <div class="form-floating">
          <textarea
            v-model="dataUpdate.MoTaHH"
            class="form-control"
            style="height: 100px"
          ></textarea>
          <label for="floatingTextarea2">Mô tả sách </label>
        </div>

        <div class="mt-3 row">
          <div class="col mt-3">
            <div class="d-flex">
              <div
                class="border mx-3 rounded d-flex justify-content-center align-items-center"
              >
                <img :src="imagePage" height="100" width="100" alt="notFound" />
              </div>

              <Upload
                @change="handleChangeImage"
                list-type="picture-card"
                :max-count="1"
                :multiple="false"
              >
                <div>
                  <div class="ant-upload-text">Upload</div>
                </div>
              </Upload>
            </div>
          </div>
          <div class="col">
            <label class="form-label">Tác giả</label>
            <input
              v-model="dataUpdate.TacGia"
              type="text"
              class="form-control"
            />
            <label class="form-label">Số lượng sách</label>
            <input
              v-model="dataUpdate.SoLuongHang"
              type="text"
              class="form-control"
            />
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Ghi chú</label>
          <input v-model="dataUpdate.GhiChu" type="text" class="form-control" />
        </div>
      </form>
    </a-modal>
  </div>
</template>


