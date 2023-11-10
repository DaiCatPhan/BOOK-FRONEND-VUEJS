<script setup>
import { computed, ref } from "vue";

const dataSource = ref([
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
]);

const columns = ref([
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
]);
</script>

<template>
  <div class="min-vh-100 p-5">
    <p>Lịch sử đặt hàng</p>
    <div>
      <a-table :dataSource="dataSource" :columns="columns" />
    </div>

    <div></div>
  </div>
</template>



<style>
</style>