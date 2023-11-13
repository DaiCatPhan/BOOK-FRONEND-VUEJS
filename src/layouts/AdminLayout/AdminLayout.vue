<script setup>
import { IconUserSquareRounded } from "@tabler/icons-vue";
import { onMounted, ref, warn, watch, watchEffect } from "vue";
import { authenticationStore } from "../../stores/authenticationStore";
import Service from "../../service/api";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const collapsed = ref(false);
const selectedKeys = ref(["1"]);
const router = useRouter();

const authentication = authenticationStore();

const profile = ref({});
const isLogin = ref(false);

const handleGetProfile = async () => {
  try {
    profile.value = authentication.getUser();
    isLogin.value = authentication.getStateLogin();

    // if (profile?.value?.Role !== "admin") {
    //   router.push("/");
    // }
  } catch (error) {
    console.log("error", error);
  }
};

watch(async () => {
  await handleGetProfile();
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
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider collapsible>
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <router-link to="/admin-home"><span>Home</span></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/admin-dashboard"
            ><span>Dashboard</span></router-link
          >
        </a-menu-item>
        <a-sub-menu key="3">
          <template #title>
            <span>
              <span>Manager book</span>
            </span>
          </template>
          <router-link to="/admin-managerBook"
            ><a-menu-item key="3.1">CRUD</a-menu-item></router-link
          >
        </a-sub-menu>
        <a-sub-menu key="4">
          <template #title>
            <span>
              <span>Manger Booking</span>
            </span>
          </template>
          <router-link to="/admin-managerBooking"
            ><a-menu-item key="4.1">CRUD</a-menu-item></router-link
          >
        </a-sub-menu>
        <a-sub-menu key="5">
          <template #title>
            <span>
              <span>Manger Customer</span>
            </span>
          </template>
          <router-link to="/admin-managerCustomer">
            <a-menu-item key="5.1">CRUD</a-menu-item></router-link
          >
        </a-sub-menu>
        <a-menu-item key="6">
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="d-flex justify-content-between mx-5">
          <div></div>
          <div>
            <a-dropdown-button>
              {{ profile?.Email }}
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1"> Hồ sơ của tôi </a-menu-item>
                  <a-menu-item key="2"> Giỏ hàng của tôi </a-menu-item>
                  <a-menu-item key="3"> Lịch sử mua hàng </a-menu-item>
                  <a-menu-item key="4" @click="handleLogout">
                    Log out
                  </a-menu-item>
                </a-menu>
              </template>
              <template #icon
                ><IconUserSquareRounded style="margin-bottom: 3px"
              /></template>
            </a-dropdown-button>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Admin</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '80vh' }"
        >
          <slot />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Website bán sách uy tín , hàng đầu Việt Nam
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>















<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>