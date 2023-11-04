

<script setup>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
</script>

<template>
  <div>
    <component :is="$route.meta.layout">
      <router-view />
    </component>
  </div>
</template>

<style>
</style>