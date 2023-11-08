<script setup>
import { onMounted, ref, watch } from "vue";
import Service from "../../../../service/api";

const listCustomer = ref([]);
const current = ref(1);
const pageSize = ref(5);
const total = ref(0);

const fetchData = async () => {
  const data = await Service.readPanigation_KHACH_HANG(
    `?page=${+current.value}&limit=${+pageSize.value}`
  );

  if (data && data.data.EC === 0 && data.data.DT.pagination.length > 0) {
    listCustomer.value = data.data.DT.pagination;
    total.value = data.data.DT?.meta?.total;
  }
};
onMounted(() => {
  fetchData();
});

watch(
  [current, pageSize],
  () => {
    fetchData();
  },
  { immediate: true }
);

const columns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: "HoTen",
    dataIndex: "HoTen",
    key: "HoTen",
  },
  {
    title: "SoDienThoai",
    dataIndex: "SoDienThoai",
    key: "SoDienThoai",
  },
  {
    title: "createdAt",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  // {
  //   title: "Action",
  //   key: "action",
  // },
];
</script>

<template>
  <div>
    <div class="d-flex gap-2">
      <p>Manager Customer :</p>
      <p>
        <b class="text-warning">{{ total || 0 }}</b> khách hàng
      </p>
    </div>
    <div>
      <a-table :dataSource="listCustomer" :columns="columns" />
    </div>
  </div>
</template>



<style>
</style>