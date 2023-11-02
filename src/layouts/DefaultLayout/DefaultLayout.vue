<template>
  <div>
    <Header />
    <div>
      <slot></slot>
    </div>
    <h1>Footer Default Layout</h1>
  </div>
</template>

<script setup>
import Header from "../componentLayouts/Header/Header.vue";
</script>

<style>
</style>