<script setup>
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import Service from "../../../service/api";
import { authenticationStore } from "../../../stores/authenticationStore";
import moment from "moment";
import { IconBackspace } from "@tabler/icons-vue";
import { toast } from "vue3-toastify";

const type = ref(0);
const activeKey = ref(["1"]);
const profile = ref({});
const orderAll = ref([]);

// Tab
const handleTabChange = (key) => {
  type.value = key;
};

// Gọi API

const fetchData = async () => {
  try {
    const res = await Service.read_DAT_HANG(
      `ID_KhachHang=${profile?.value?._id}&type=${type.value}&sort=-updatedAt`
    );

    if (res && res.data.EC === 0) {
      orderAll.value = res.data.DT;
    }
  } catch (error) {
    console.log("error", error);
  }
};

watch(
  [type],
  () => {
    fetchData();
  },
  { immediate: true }
);

watchEffect(() => {
  const authentication = authenticationStore();
  profile.value = authentication.getUser();
  fetchData();
});

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

const columns = ref([
  {
    title: "Đơn hàng",
    dataIndex: "OrderDetail",
    key: "Đơn hàng",
  },

  {
    title: "Tổng tiền",
    dataIndex: "OrderDetail",
    key: "Tổng tiền",
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
    title: "TrangthaiHD",
    dataIndex: "TrangthaiHD",
    key: "TrangthaiHD",
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
]);

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

const handleDeleteOrder = async (data) => {
  const res = await Service.delete_DAT_HANG({ idOrder: data._id });
  if (res && res.data && res.data.EC === 0) {
    toast.success(res.data.EM);
    fetchData();
  } else {
    toast.success(res.data.EM);
  }
};
</script>

<template>
  <div class="min-vh-100 p-5">
    <p>Lịch sử đặt hàng</p>
    <div>
      <a-tabs v-model="activeKey" @change="handleTabChange">
        <a-tab-pane key="0" tab="Đơn hàng chưa duyệt"> </a-tab-pane>
        <a-tab-pane key="1" tab="Đơn hàng đã duyệt"> </a-tab-pane>
        <a-tab-pane key="2" tab="Đơn hàng đã giao"> </a-tab-pane>
        <a-tab-pane key="3" tab="Đơn hàng bị hủy"> </a-tab-pane>
      </a-tabs>
    </div>

    <div>
      <a-table :dataSource="orderAll" :columns="columns">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'Đơn hàng'">
            <div class="d-flex">
              <div v-for="item in record?.OrderDetail" :key="item._id">
                <img
                  :src="item?.MSHH?.HinhHH"
                  alt="notFound"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </template>

          <template v-if="column.key === 'Tổng tiền'">
            <div class="d-flex">
              {{
                record?.OrderDetail?.reduce((total, item) => {
                  return (total += +item?.SoLuong * +item?.MSHH?.Gia);
                }, 0).toLocaleString("vi-VN") || 0
              }}
              đ
            </div>
          </template>

          <template v-if="column.key === 'NgayDH'">
            <div>
              {{ record?.NgayDH && moment(record?.NgayDH).format("DD/MM/YYYY") }}
            </div>
          </template>

          <template v-if="column.key === 'NgayGH'">
            <div>
              {{ record?.NgayGH && moment(record?.NgayGH).format("DD/MM/YYYY") }}
            </div>
          </template>

          <template v-if="column.key === 'TrangthaiHD'">
            <div>
              {{ getStatusText(record?.TrangthaiHD) }}
            </div>
          </template>

          <template v-if="column.key === 'OrderDetail'">
            <a-collapse>
              <a-collapse-panel key="1" header="Chi tiết đơn hàng">
                <div
                  v-for="item in record?.OrderDetail"
                  :key="item._id"
                  class="d-flex justify-content-between"
                >
                  <div>{{ item?.MSHH?.TenHH }}</div>
                  <div class="">{{ item?.MSHH?.Gia }} đ</div>
                  <div class="text-warning">x{{ item?.SoLuong }}</div>
                </div>
              </a-collapse-panel>
            </a-collapse>
          </template>

          <template v-if="column.key === 'action'">
            <div class="d-flex" v-if="type == 0">
              <div class="poiter">
                <IconBackspace
                  @click="() => handleDeleteOrder(record)"
                  :style="{ color: 'red' }"
                />
              </div>
            </div>
          </template>
        </template>
      </a-table>
    </div>

    <div></div>
  </div>
</template>



<style>
</style>