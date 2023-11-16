

<script setup>
import { IconShoppingCart, IconUserSquareRounded } from "@tabler/icons-vue";
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

import Service from "../../../service/api";

import Cart_Header from "../Cart_Header/Cart_Header.vue";

import ModalLogin from "../ModalLogin/ModalLogin.vue";
import ModalRegister from "../ModalRegister/ModalRegister.vue";

import { authenticationStore } from "../../../stores/authenticationStore";
const router = useRouter();
const authentication = authenticationStore();
const profile = ref({});
const isLogin = ref(false);

watchEffect(() => {
  profile.value = authentication.getUser();
  isLogin.value = authentication.getStateLogin();
});

const handleLogout = async () => {
  const res = await Service.logout_AUTHENTICATION();
  if (res && res.data.EC === 0) {
    router.push("/");
    toast.success(res.data.EM);
    authentication.logout();
  } else {
    toast.success(res.data.EM);
  }
};

const isShowModalLogin = ref(false);
const isShowModalRegister = ref(false);

const OpenModalLogin = () => {
  isShowModalLogin.value = true;
};
const closeModalLogin = () => {
  isShowModalLogin.value = false;
};

const OpenModalRegister = () => {
  isShowModalRegister.value = true;
};
const closeModalRegister = () => {
  isShowModalRegister.value = false;
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container text-white">
      <a class="navbar-brand text-white" href="/">
        <img height="50" width="50" src="/images/typebooks/love.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3">
            <router-link class="nav-link text-white" to="/books"
              >Sách</router-link
            >
          </li>

          <li class="nav-item mx-3">
            <router-link
              class="nav-link active text-white"
              aria-current="page"
              to="/lienhe"
              >Liên hệ</router-link
            >
          </li>

          <li class="nav-item mx-3">
            <router-link
              class="nav-link active text-white"
              aria-current="page"
              to="/lienhe"
              >Công ty</router-link
            >
          </li>
        </ul>
        <div class="d-flex">
          <Cart_Header />

          <a-dropdown-button v-if="isLogin === true">
            {{ profile?._Email || "" }}
            <template #overlay>
              <a-menu>
                <router-link to="/profile"
                  ><a-menu-item key="1">
                    Hồ sơ của tôi
                  </a-menu-item></router-link
                >
                <router-link to="/order"
                  ><a-menu-item key="2">
                    Vỏ hàng của tôi
                  </a-menu-item></router-link
                >
                <router-link to="/history">
                  <a-menu-item key="3">
                    Lịch sử mua hàng
                  </a-menu-item></router-link
                >
                <a-menu-item key="4">
                  <router-link to="/" @click="handleLogout"
                    >Log out</router-link
                  >
                </a-menu-item>
              </a-menu>
            </template>
            <template #icon
              ><IconUserSquareRounded style="margin-bottom: 3px"
            /></template>
          </a-dropdown-button>

          <a-dropdown-button v-else>
            Tài khoản
            <template #overlay>
              <a-menu>
                <a-menu-item key="1"
                  ><div class="text-center">
                    <button
                      @click="OpenModalLogin"
                      class="px-5 btn btn-primary m-auto"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </a-menu-item>

                <a-menu-item key="2">
                  <div>
                    Chưa có tài khoản ?
                    <span class="text-warning" @click="OpenModalRegister"
                      >Đăng ký</span
                    >
                    ngay
                  </div>
                </a-menu-item>
              </a-menu>
            </template>
            <template #icon
              ><IconUserSquareRounded style="margin-bottom: 3px"
            /></template>
          </a-dropdown-button>
        </div>
      </div>
    </div>

    <ModalLogin
      :isShowModalLogin="isShowModalLogin"
      :closeModalLogin="closeModalLogin"
    />

    <ModalRegister
      :isShowModalRegister="isShowModalRegister"
      :closeModalRegister="closeModalRegister"
    />
  </nav>
</template>

<style>
</style>