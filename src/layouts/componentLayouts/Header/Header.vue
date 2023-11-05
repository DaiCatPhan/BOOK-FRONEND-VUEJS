

<script setup>
import { IconUserSquareRounded } from "@tabler/icons-vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container text-white">
      <a class="navbar-brand text-white" href="/">Home</a>
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
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/books"
              >Sách</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link active text-white"
              aria-current="page"
              to="/lienhe"
              >Liên hệ</router-link
            >
          </li>
        </ul>
        <div class="d-flex">
          <a-dropdown-button>
            Dropdown
            <template #overlay>
              <a-menu @click="handleMenuClick">
                <a-menu-item key="1">
                  <UserOutlined />
                  Hồ sơ của tôi
                </a-menu-item>
                <a-menu-item key="2">
                  <UserOutlined />
                  Vỏ hàng của tôi
                </a-menu-item>
                <a-menu-item key="3">
                  <UserOutlined />
                  Lịch sử mua hàng
                </a-menu-item>
                <a-menu-item key="4">
                  <router-link to="/">Log out</router-link>
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
  </nav>
</template>

<style>
</style>