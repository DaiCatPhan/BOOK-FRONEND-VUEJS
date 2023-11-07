<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { toast } from "vue3-toastify";
import Service from "../../../service/api";

const confirmLoading = ref(false);

const props = defineProps({
  isShowModalLogin: Boolean,
  closeModalLogin: Function,
});

const dataLoginUser = ref({
  Email: "",
  Password: "",
});

const validate = () => {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (!dataLoginUser.value.Email) {
    toast.error("Nhập thiếu Email !!!");
    return false;
  }
  const spaceRegex = / /;
  if (spaceRegex.test(dataLoginUser.value.Email)) {
    toast.error("Email không được chứa khoảng trắng !!!");
    return false;
  }
  if (!emailRegex.test(dataLoginUser.value.Email)) {
    toast.error(" Email không đúng định dạng !!!");
    return false;
  }

  if (!dataLoginUser.value.Password) {
    toast.error("Nhập thiếu Password !!!");
    return false;
  }

  return true;
};

const handleCancel = () => {
  dataLoginUser.value = {};
  props.closeModalLogin();
};

const handleOk = async () => {
  const validated = validate();
  if (!validated) {
    return;
  }
  const res = await Service.login_AUTHENTICATION(dataLoginUser.value);
  console.log("res", res);
  if (res && res.data.EC === 0 && res.data.DT.token) {
    useToast().success(res.data.EM);
    handleCancel();
  } else {
    useToast().success(res.data.EM);
  }
};
</script>



<template>
  <div>
    <a-modal
      :open="isShowModalLogin"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
      title="Đăng nhập"
      okText="Đăng nhập"
    >
      <div class=" ">
        <form>
          <div class="my-3">
            <label class="label">Email</label>
            <input
              v-model="dataLoginUser.Email"
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