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
          <a-menu-item key="4.1">Team 1</a-menu-item>
          <a-menu-item key="4.2">Team 2</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="5">
          <template #title>
            <span>
              <span>Manger Customer</span>
            </span>
          </template>
          <a-menu-item key="5.1">CRUD</a-menu-item>
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
              Tài khoản
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1"> Hồ sơ của tôi </a-menu-item>
                  <a-menu-item key="2"> Giỏ hàng của tôi </a-menu-item>
                  <a-menu-item key="3"> Lịch sử mua hàng </a-menu-item>
                  <a-menu-item key="4"> Log out </a-menu-item>
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
<script setup>
import { IconUserSquareRounded } from "@tabler/icons-vue";
import { ref } from "vue";
const collapsed = ref(false);
const selectedKeys = ref(["1"]);
</script>
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