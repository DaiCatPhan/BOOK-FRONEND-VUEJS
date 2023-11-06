<script setup>
import { ref } from "vue";
const confirmLoading = ref(false);

const props = defineProps({
  isShowModalLogin: Boolean,
  closeModalLogin: Function,
});

const dataLoginUser = ref({
  EmailKH: "",
  Password: "",
});

const handleOk = () => {
  console.log("dataLoginUser", dataLoginUser.value);
};

const handleCancel = () => {};
</script>



<template>
  <div>
    <a-modal
      :open="isShowModalLogin"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="closeModalLogin"
      title="Đăng nhập"
      okText="Đăng nhập"
    >
      <div class=" ">
        <form>
          <div class="my-3">
            <label class="label">Email</label>
            <input
              v-model="dataLoginUser.EmailKH"
              type="text"
              class="form-control"
            />
          </div>
          <div class="my-3">
            <label class="label">Password</label>
            <input
              v-model="dataLoginUser.Password"
              type="password"
              class="form-control"
            />
          </div>
        </form>
      </div>
    </a-modal>
  </div>
</template>



<style>
</style>