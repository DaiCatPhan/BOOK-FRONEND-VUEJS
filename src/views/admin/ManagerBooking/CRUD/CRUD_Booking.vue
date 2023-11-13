<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Service from "../../../../service/api";
import { IconTrash } from "@tabler/icons-vue";
import { IconEdit } from "@tabler/icons-vue";
import ModalUpdateOrder from '../components/ModalUpdateOrder/ModalUpdateOrder.vue'

const columns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Email",
    dataIndex: "MSKH.Email",
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
    title: "OrderDetail",
    dataIndex: " ",
    key: " ",
  },
  {
    title: "Action",
    key: "action",
  },
];

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

const fetchData = async () => {
  const data = await Service.readPanigation_DAT_HANG(
    `?page=${+current.value}&limit=${+pageSize.value}&type=0&sort=-createdAt`
  );

  console.log("datafetchData >>>>>>>>>", data);

  if (data && data.data.EC === 0 && data.data.DT.pagination.length > 0) {
    dataOrder.value = data.data.DT.pagination;
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

// MODAL UPDATE BOOK
const handleUpdate = async (data) => {
  isShowModalUpdate.value = true;
  dataModalUpdate.value = data;
};
const closeModalUpdate = () => {
  isShowModalUpdate.value = false;
};
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h4>Manager Booking</h4>
      <h5 class="text-danger">
        Có <b class="text-primary">{{ total }}</b> đơn hàng chưa duyệt
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
          <!-- Action -->
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
        </template>
      </a-table>
    </div>

    <ModalUpdateOrder
      :isShowModalUpdate="isShowModalUpdate"
      :closeModalUpdate="closeModalUpdate"
      :dataModalUpdate="dataModalUpdate"
    />
  </div>
</template>



<style>
</style>