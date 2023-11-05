<script setup>
import { ref } from "vue";
import { InputNumber, Upload } from "ant-design-vue";
import ServiceApi from "../../../../../service/api.js";
import { toast } from "vue3-toastify";
import axios from "axios";

const { isShowModalAdd, closeModalAdd } = defineProps({
  closeModalAdd: Function,
  isShowModalAdd: Boolean,
});

const TenHH = ref("");
const MoTaHH = ref("");
const Gia = ref(0);
const SoLuongHang = ref(0);
const GhiChu = ref("");
const TacGia = ref("");
const HinhHH = ref("");
const TheLoai = ref("");

const confirmLoading = ref(false);

// Xử lí hình ảnh
const handleChangeImage = (info) => {
  const file = info.file.originFileObj;
  HinhHH.value = file;
};

// Xử lí chọn thể loại
const handleChangeSelectType = (value) => {
  TheLoai.value = value;
};

// Goi API thanh cong xóa dữ liệu và đóng đi
const handleClose = () => {
  TenHH.value = "";
  MoTaHH.value = "";
  Gia.value = 0;
  SoLuongHang.value = 0;
  GhiChu.value = "";
  TacGia.value = "";
  HinhHH.value = "";
  TheLoai.value = "";
  closeModalAdd();
};

// Xử lí submit FORM
const handleOk = async () => {
  // Gọi API create Book

  console.log(
    TenHH.value,
    MoTaHH.value,
    Gia.value,
    SoLuongHang.value,
    GhiChu.value,
    TheLoai.value,
    TacGia.value,
    HinhHH.value
  );

  try {
    const formData = new FormData();
    formData.append("TenHH", TenHH.value);
    formData.append("MoTaHH", MoTaHH.value);
    formData.append("Gia", parseInt(Gia.value, 10));
    formData.append("SoLuongHang", parseInt(SoLuongHang.value, 10));
    formData.append("GhiChu", GhiChu.value);
    formData.append("TheLoai", TheLoai.value);
    formData.append("TacGia", TacGia.value);
    formData.append("HinhHH", HinhHH.value);

    confirmLoading.value = true;
    const res = await ServiceApi.create_HANG_HOA(formData);
    confirmLoading.value = false;

    if (res && res.data && res.data.EC === 0) {
      toast.success("Tạo sách thành công");
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
      :open="isShowModalAdd"
      title="Thêm sách "
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="closeModalAdd"
      :style="{ top: '10px' }"
    >
      <form>
        <div class="mb-3">
          <label class="form-label">Nhập tên sách</label>
          <input v-model="TenHH" type="text" class="form-control" />
        </div>
        <div class="mb-3 row">
          <div class="col-6">
            <label class="form-label">Giá </label>
            <!-- <input v-model="Gia" type="text" class="form-control" /> -->

            <a-input-number
              class="w-100"
              v-model:value="Gia"
              :formatter="
                (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              "
              :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
            />
          </div>
          <div class="col-6">
            <label class="form-label">Thể loại</label>

            <a-select
              ref="select"
              style="width: 220px"
              v-model="TheLoai"
              :value="TheLoai"
              @change="handleChangeSelectType"
            >
              <a-select-option value="kinh tế">Kinh tế</a-select-option>
              <a-select-option value="tôn giáo">Tôn giáo</a-select-option>
              <a-select-option value="tiểu thuyết">Tiểu thuyết</a-select-option>
              <a-select-option value="truyện ngắn">Truyện ngắn</a-select-option>
              <a-select-option value="truyện cười">Truyện cười</a-select-option>
              <a-select-option value="sức khỏe">Sức khỏe</a-select-option>
            </a-select>
          </div>
        </div>
        <div class="form-floating">
          <textarea
            v-model="MoTaHH"
            class="form-control"
            style="height: 100px"
          ></textarea>
          <label for="floatingTextarea2">Mô tả sách </label>
        </div>

        <div class="mt-3 row">
          <div class="col">
            <Upload
              @change="handleChangeImage"
              list-type="picture-card"
              :max-count="1"
            >
              <div>
                <div class="ant-upload-text">Upload</div>
              </div>
            </Upload>
          </div>
          <div class="col">
            <label class="form-label">Tác giả</label>
            <input v-model="TacGia" type="text" class="form-control" />
            <label class="form-label">Số lượng sách</label>
            <!-- <input v-model="SoLuongHang" type="text" class="form-control" /> -->
            <InputNumber class="w-100" v-model:value="SoLuongHang" />
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Ghi chú</label>
          <input v-model="GhiChu" type="text" class="form-control" />
        </div>
      </form>
    </a-modal>
  </div>
</template>


