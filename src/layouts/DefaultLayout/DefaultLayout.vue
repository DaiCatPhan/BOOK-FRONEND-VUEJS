<template>
  <div>
    <Header />
    <div>
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../componentLayouts/Header/Header.vue";
import Footer from "../componentLayouts/Footer/Footer.vue";
</script>

<style>
</style>