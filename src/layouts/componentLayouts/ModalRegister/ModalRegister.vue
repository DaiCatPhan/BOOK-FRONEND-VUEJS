<script setup>
import { ref } from "vue";
const confirmLoading = ref(false);

const props = defineProps({
  isShowModalRegister: Boolean,
  closeModalRegister: Function,
});

const dataUser = ref({
  EmailKH: "",
  HoTenKH: "",
  SoDienThoai: "",
  Password: "",
});

const ConfirmPassword = ref("");

const handleOk = () => {
  console.log("dataUser", dataUser.value);
  console.log("ConfirmPassword", ConfirmPassword.value);
};

const handleCancel = () => {};
</script>



<template>
  <div>
    <a-modal
      :open="isShowModalRegister"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      title="Đăng ký"
      @cancel="closeModalRegister"
      okText="Đăng ký"
    >
      <div class=" ">
        <form>
          <div class="my-3">
            <label class="label">Email</label>
            <input
              v-model="dataUser.EmailKH"
              type="text"
              class="form-control"
            />
          </div>
          <div class="my-3">
            <label class="label">Họ và tên</label>
            <input
              v-model="dataUser.HoTenKH"
              type="text"
              class="form-control"
            />
          </div>
          <div class="my-3">
            <label class="label">Số điện thoại</label>
            <input
              v-model="dataUser.SoDienThoai"
              type="text"
              class="form-control"
            />
          </div>
          <div class="my-3">
            <label class="label">Password</label>
            <input
              v-model="dataUser.Password"
              type="password"
              class="form-control"
            />
          </div>
          <div class="my-3">
            <label class="label">Confirm Password</label>
            <input
              v-model="ConfirmPassword"
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