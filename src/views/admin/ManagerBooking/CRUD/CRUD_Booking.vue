<script setup>
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import Service from "../../../../service/api";
import { IconTrash } from "@tabler/icons-vue";
import { IconEdit } from "@tabler/icons-vue";
import ModalUpdateOrder from "../components/ModalUpdateOrder/ModalUpdateOrder.vue";
import moment from "moment";
import { watermarkProps } from "ant-design-vue/es/watermark";

const type = ref(0);

const isShowModalUpdate = ref(false);
const dataModalUpdate = ref({});

const dataOrder = ref([]);
const current = ref(1);
const pageSize = ref(5);
const total = ref(0);

const pagination = computed(() => ({
  current: current.value,
  pageSize: pageSize.value,
  total: total.value,
  showSizeChanger: true,
  pageSizeOptions: ["5", "10", "15"],
}));

const handleTableChange = (data) => {
  if (data) {
    current.value = data.current;
    pageSize.value = data.pageSize;
    total.value = data.total;
  }
};

const hanleColumn_Date_Gh = () => {
  console.log("type>>>>>>>>>>>", type.value);
  if (type.value == 1) {
    return "Ngày giao hàng dự kiến";
  } else if (type.value == 2) {
    return "Ngày đã giao hàng";
  } else if (type.value == 3) {
    return "Ngày hủy đơn hàng";
  } else {
    return null;
  }
};

watchEffect(() => {
  hanleColumn_Date_Gh();
});

const columns = [
  {
    title: "_id đơn hàng",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Email",
    dataIndex: ["MSKH", "Email"],
    key: "Email",
  },
  {
    title: "TrangthaiHD",
    dataIndex: "TrangthaiHD",
    key: "TrangthaiHD",
  },
  {
    title: "NgayDH",
    dataIndex: "NgayDH",
    key: "NgayDH",
  },
  {
    title: hanleColumn_Date_Gh,
    dataIndex: "NgayGH",
    key: "NgayGH",
  },
  {
    title: "OrderDetail",
    dataIndex: "OrderDetail",
    key: "OrderDetail",
  },
  {
    title: "Action",
    key: "action",
  },
];

const fetchData = async () => {
  const data = await Service.readPanigation_DAT_HANG(
    `?page=${+current.value}&limit=${+pageSize.value}&type=${
      type.value
    }&sort=-createdAt`
  );

  if (data && data.data.EC == 0) {
    dataOrder.value = data.data.DT.pagination;
    total.value = data.data.DT?.meta?.total;
  }
};

onMounted(() => {
  fetchData();
});

watch(
  [current, pageSize, type],
  () => {
    fetchData();
  },
  { immediate: true }
);

// MODAL UPDATE BOOK
const handleUpdate = async (data) => {
  isShowModalUpdate.value = true;
  dataModalUpdate.value = data;
};
const closeModalUpdate = () => {
  isShowModalUpdate.value = false;
};

const getStatusText = (trangThaiHD) => {
  if (trangThaiHD == 0) {
    return "Chưa duyệt";
  } else if (trangThaiHD == 1) {
    return "Đã duyệt";
  } else if (trangThaiHD == 2) {
    return "Đã giao hàng";
  } else {
    return "Bị hủy";
  }
};

//
const activeKey = ref(["1"]);

const handleTabChange = (key) => {
  type.value = key;
};

const activeKey2 = ref(["1"]);
</script>

<template>
  <div>
    <div>
      <a-tabs v-model="activeKey" @change="handleTabChange">
        <a-tab-pane key="0" tab="Đơn hàng chưa duyệt"> </a-tab-pane>
        <a-tab-pane key="1" tab="Đơn hàng đã duyệt"> </a-tab-pane>
        <a-tab-pane key="2" tab="Đơn hàng đã giao"> </a-tab-pane>
        <a-tab-pane key="3" tab="Đơn hàng bị hủy"> </a-tab-pane>
      </a-tabs>
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <h4>Manager Booking</h4>
      <h5 class="" v-if="type == 0">
        Có <b class="text-danger">{{ total }}</b> đơn hàng chưa duyệt
      </h5>
    </div>
    <div>
      <a-table
        :dataSource="dataOrder"
        :columns="columns"
        bordered
        :pagination="pagination"
        @change="handleTableChange"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <div class="d-flex">
              <div class="poiter">
                <IconEdit
                  @click="() => handleUpdate(record)"
                  :style="{ color: 'blue' }"
                />
              </div>
            </div>
          </template>

          <template v-if="column.key === 'NgayDH'">
            <div>
              {{ record.NgayDH && moment(record?.NgayDH).format("DD/MM/YYYY") }}
            </div>
          </template>

          <template v-if="column.key === 'NgayGH'">
            <div>
              {{ record.NgayGH && moment(record?.NgayGH).format("DD/MM/YYYY") }}
            </div>
          </template>

          <template v-if="column.key === 'TrangthaiHD'">
            <div>
              {{ getStatusText(record?.TrangthaiHD) }}
            </div>
          </template>

          <template v-if="column.key === 'OrderDetail'">
            <!-- <div v-for="item in record.OrderDetail" :key="item._id"  class="d-flex">
              <div>{{ item?.MSHH?.TenHH }}</div>
              <div class="text-warning mx-3"> x{{ item?.SoLuong }}</div>
            </div> -->
            <a-collapse v-model="activeKey2">
              <a-collapse-panel key="1" header="Chi tiết đơn hàng">
                <div
                  v-for="item in record?.OrderDetail"
                  :key="item._id"
                  class="d-flex"
                >
                  <div>{{ item?.MSHH?.TenHH }}</div>
                  <div class="text-warning mx-3">x{{ item?.SoLuong }}</div>
                </div>
              </a-collapse-panel>
            </a-collapse>
          </template>
        </template>
      </a-table>
    </div>

    <ModalUpdateOrder
      :isShowModalUpdate="isShowModalUpdate"
      :closeModalUpdate="closeModalUpdate"
      :dataModalUpdate="dataModalUpdate"
      :fetchData="fetchData"
    />
  </div>
</template>



<style>
</style>