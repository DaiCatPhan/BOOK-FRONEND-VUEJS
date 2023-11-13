<script setup>
const props = defineProps({
  closeModalUpdate: Function,
  isShowModalUpdate: Boolean,
  dataModalUpdate: Object,
});

const handleOk = () => {
  alert("ok");
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
        <h1>Update Modal Order</h1>
      </form>
    </a-modal>
  </div>
</template>



<style>
</style>