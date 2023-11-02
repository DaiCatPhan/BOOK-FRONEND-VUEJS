

<script>
export default {
  name: "App",
};
</script>

<template>
  <div>
    <component :is="$route.meta.layout">
      <router-view />
    </component>

    <!-- <div><router-link to="/">Den trang Home</router-link></div>
    <router-link to="/users">Den trang User</router-link> -->
  </div>
</template>

<style>
</style>