<script setup>
import { ref } from "vue";
import Service from "../../../service/api";
import { toast } from "vue3-toastify";
import { useToast } from "vue-toastification";

const confirmLoading = ref(false);

const props = defineProps({
  isShowModalRegister: Boolean,
  closeModalRegister: Function,
});

const dataUser = ref({
  Email: "",
  HoTen: "",
  SoDienThoai: "",
  Password: "",
});
const ConfirmPassword = ref("");

const validate = () => {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (!dataUser.value.Email) {
    toast.error("Nhập thiếu Email !!!");
    return false;
  }
  const spaceRegex = / /;
  if (spaceRegex.test(dataUser.value.Email)) {
    toast.error("Email không được chứa khoảng trắng !!!");
    return false;
  }
  if (!emailRegex.test(dataUser.value.Email)) {
    toast.error(" Email không đúng định dạng !!!");
    return false;
  }
  if (!dataUser.value.HoTen) {
    toast.error("Nhập thiếu HoTen !!!");
    return false;
  }
  if (!dataUser.value.SoDienThoai) {
    toast.error("Nhập thiếu SoDienThoai !!!");
    return false;
  }
  if (!dataUser.value.Password) {
    toast.error("Nhập thiếu Password !!!");
    return false;
  }
  if (!ConfirmPassword.value) {
    toast.error("Nhập thiếu ConfirmPassword !!!");
    return false;
  }
  if (dataUser.value.Password !== ConfirmPassword.value) {
    toast.error("Mật khẩu và xác nhận mật khẩu không khớp !!!");
    return false;
  }
  return true;
};

const handleOk = async () => {
  const validated = validate();
  if (!validated) {
    return;
  }

  const res = await Service.register_AUTHENTICATION(dataUser.value);

  if (res && res.data.EC === 0 && res.data.DT._id) {
    useToast().success(res.data.EM);
    handleCancel();
  } else {
    useToast().success(res.data.EM);
  }
};

const handleCancel = () => {
  dataUser.value = {};
  ConfirmPassword.value = "";
  props.closeModalRegister();
};
</script>



<template>
  <div>
    <a-modal
      :open="isShowModalRegister"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      title="Đăng ký"
      @cancel="handleCancel"
      okText="Đăng ký"
    >
      <div class=" ">
        <form>
          <div class="my-3">
            <label class="label">Email</label>
            <input v-model="dataUser.Email" type="text" class="form-control" />
          </div>
          <div class="my-3">
            <label class="label">Họ và tên</label>
            <input v-model="dataUser.HoTen" type="text" class="form-control" />
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