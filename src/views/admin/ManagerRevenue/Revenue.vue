<script setup>
import { computed, onMounted, ref } from "vue";
import Service from "../../../service/api";

const listRevenue = ref([]);

const columns = [
  {
    title: "Ảnh",
    dataIndex: "HinhHH",
    key: "HinhHH",
  },
  {
    title: "Tên sánh",
    dataIndex: "TenHH",
    key: "TenHH",
  },
  {
    title: "Doanh thu",
    dataIndex: "totalMoney",
    key: "totalMoney",
  },
];

const fetchData = async () => {
  const data = await Service.revenue_DAT_HANG();
  if (data && data.data.EC === 0) {
    listRevenue.value = data.data.DT;
  }
};

onMounted(() => {
  fetchData();
});

const tongDoanhThu = computed(() => {
  return listRevenue.value.reduce((total, item) => {
    return total + item.totalMoney;
  }, 0);
});
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center my-3">
      <p><b>Doanh thu theo từng quyển sách</b></p>
      <div class="p-3 border rounded">
        <b
          >Tổng doanh thu đạt được :
          {{ parseFloat(tongDoanhThu)?.toLocaleString("vi-VN") || 0 }} đ
        </b>
      </div>
    </div>
    <a-table :dataSource="listRevenue" :columns="columns" bordered>
      <template #bodyCell="{ column, record }">
        <!-- Ảnh -->
        <template v-if="column.key === 'HinhHH'">
          <div class=" ">
            <img
              height="100"
              width="100"
              :src="record?.HinhHH"
              alt="notFound"
            />
          </div>
        </template>

        <template v-if="column.key === 'totalMoney'">
          <div class=" ">
            {{ record?.totalMoney?.toLocaleString("vi-VN") || 0 }} đ
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>



<style>
</style>