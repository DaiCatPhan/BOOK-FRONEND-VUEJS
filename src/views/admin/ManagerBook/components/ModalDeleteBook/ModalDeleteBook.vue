<script setup>
import { onMounted, ref, watch, watchEffect } from "vue";
import { InputNumber, Upload } from "ant-design-vue";
import ServiceApi from "../../../../../service/api.js";
import { toast } from "vue3-toastify";

const props = defineProps({
  closeModalDelete: Function,
  fetchData: Function,
  isShowModalDelete: Boolean,
  dataModalDelete: Object,
});

const _id = ref("");
const TenHH = ref("");
const confirmLoading = ref(false);

// Goi API thanh cong xóa dữ liệu và đóng đi
const handleClose = () => {
  props.closeModalDelete();
};

watchEffect(() => {
  _id.value = props.dataModalDelete._id;
  TenHH.value = props.dataModalDelete.TenHH;
});

// Xử lí submit FORM
const handleOk = async () => {
  const res = await ServiceApi.delete_HANG_HOA({ idProduct: _id.value });
  if (res && res.data.EC === 0) {
    toast.success(res.data.EM);
    handleClose();
    props.fetchData();
  } else {
    toast.error(res.data.EM);
  }
};
</script>

<template>
  <div>
    <a-modal
      :open="props.isShowModalDelete"
      title="Xóa sách "
      @ok="handleOk"
      okText="Xóa sách"
      @cancel="handleClose"
      :style="{ top: '10px' }"
      okType="danger"
    >
      <div>
        <div>
          Bạn có chắc chắn muốn xóa sách :
          {{ TenHH || "" }}
        </div>
        <div>Hành động không thể hoàn tác !!!</div>
      </div>
    </a-modal>
  </div>
</template>


