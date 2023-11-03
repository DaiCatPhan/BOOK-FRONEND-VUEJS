<script setup>
import { ref } from "vue";
import { Upload } from "ant-design-vue";
const { isShowModalAdd, closeModalAdd } = defineProps({
  closeModalAdd: Function,
  isShowModalAdd: Boolean,
});

const TenHH = ref("");
const MoTaHH = ref("");
const Gia = ref(0);
const SoLuongHang = ref(0);
const GhiChu = ref("");
const imageUrl = ref("");
const confirmLoading = ref(false);

// Xử lí hình ảnh
const handleChangeImage = (info) => {
  const file = info.file.originFileObj;
  imageUrl.value = file;
};

// Xử lí submit FORM
const handleOk = () => {
  confirmLoading.value = true;
  // Gọi API create Book

  console.log("imageUrl >>>>", imageUrl.value);

  setTimeout(() => {
    closeModalAdd();
    confirmLoading.value = false;
  }, 2000);
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
            <label class="form-label">Giá ( ex : 150.000)</label>
            <input v-model="Gia" type="text" class="form-control" />
          </div>
          <div class="col-6">
            <label class="form-label">Số lượng sách</label>
            <input v-model="SoLuongHang" type="text" class="form-control" />
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

        <div class="mt-3">
          <Upload @change="handleChangeImage" list-type="picture-card">
            <div>
              <div class="ant-upload-text">Upload</div>
            </div>
          </Upload>
        </div>

        <div class="mb-3">
          <label class="form-label">Ghi chú</label>
          <input v-model="GhiChu" type="text" class="form-control" />
        </div>
      </form>
    </a-modal>
  </div>
</template>


