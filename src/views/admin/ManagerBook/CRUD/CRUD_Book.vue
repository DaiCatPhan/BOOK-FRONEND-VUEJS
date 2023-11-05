
<script setup>
import { IconRotateClockwise, IconTrash } from "@tabler/icons-vue";
import { IconEdit } from "@tabler/icons-vue";
import { onMounted, ref, watch } from "vue";
import { computed } from "vue";
import axios from "axios";

import ModalAddBook from "../components/ModalAddBook/ModalAddBook.vue";
import ModalUpdateBook from "../components/ModalUpdateBook/ModalUpdateBook.vue";

import Service from "../../../../service/api";

const isShowModalAdd = ref(false);
const isShowModalUpdate = ref(false);
const dataModalUpdate = ref({});
const isShowModalDelete = ref(false);

const listBook = ref([]);
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

// MODAL UPDATE BOOK
const handleUpdate = async (data) => {
  isShowModalUpdate.value = true;
  dataModalUpdate.value = data;
};
const closeModalUpdate = () => {
  isShowModalUpdate.value = false;
};

// MODAL DELETE BOOK
const handleDelete = async (data) => {
  isShowModalDelete.value = true;
};

// MODAL ADD BOOK
const handleAddBook = async () => {
  isShowModalAdd.value = true;
};
const closeModalAdd = () => {
  isShowModalAdd.value = false;
};

// REFETCH DATA ICON
const handleRefetch = async () => {
  alert("handleRefetch");
};

// TABLE

const columns = [
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "TenHH",
    dataIndex: "TenHH",
    key: "TenHH",
  },
  {
    title: "Gia",
    dataIndex: "Gia",
    key: "Gia",
  },
  {
    title: "TheLoai",
    dataIndex: "TheLoai",
    key: "TheLoai",
  },

  {
    title: "Action",
    key: "action",
  },
];

const handleTableChange = (data) => {
  console.log("data", data);
  if (data) {
    current.value = data.current;
    pageSize.value = data.pageSize;
    total.value = data.total;
  }
};

// Xử lí Gọi API và phân trang

const fetchData = async () => {
  const data = await Service.readPanigate_HANG_HOA(
    `?page=${+current.value}&limit=${+pageSize.value}`
  );

  if (data && data.data.EC === 0 && data.data.DT.pagination.length > 0) {
    listBook.value = data.data.DT.pagination;
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
</script>

<template>
  <div class="CRUD">
    <div class="border d-flex justify-content-between">
      <button @click="handleAddBook" class="btn btn-sm border border-primary">
        Add
      </button>
      <div>
        <IconRotateClockwise
          @click="handleRefetch"
          class="poiter"
          :style="{ color: 'blue' }"
        />
      </div>
    </div>
    <a-table
      :dataSource="listBook"
      :columns="columns"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <div class="d-flex border">
            <div class="poiter">
              <IconEdit
                @click="() => handleUpdate(record)"
                :style="{ color: 'yellow' }"
              />
            </div>
            <div class="mx-3 poiter">
              <IconTrash
                @click="() => handleDelete(record)"
                :style="{ color: 'red' }"
              />
            </div>
          </div>
        </template>
      </template>
    </a-table>

    <ModalAddBook
      :isShowModalAdd="isShowModalAdd"
      :closeModalAdd="closeModalAdd"
    />

    <ModalUpdateBook
      :isShowModalUpdate="isShowModalUpdate"
      :closeModalUpdate="closeModalUpdate"
      :dataModalUpdate="dataModalUpdate.value"
    />
  </div>
</template>

<style setup>
.poiter {
  cursor: pointer;
}
</style>