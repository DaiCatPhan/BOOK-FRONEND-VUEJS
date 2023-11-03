
<script setup>
import { IconRotateClockwise, IconTrash } from "@tabler/icons-vue";
import { IconEdit } from "@tabler/icons-vue";
import { ref } from "vue";

import ModalAddBook from "../components/ModalAddBook/ModalAddBook.vue";

const isShowModalAdd = ref(false);
const isShowModalUpdate = ref(false);
const isShowModalDelete = ref(false);

// MODAL UPDATE BOOK
const handleUpdate = async (data) => {
  alert("handleUpdate");
};

// MODAL DELETE BOOK
const handleDelete = async (data) => {
  alert("handleDelete");
};

// MODAL ADD BOOK
const handleAddBook = async () => {
  isShowModalAdd.value = true;
  console.log("isShowModalAdd", isShowModalAdd.value);
};
const closeModalAdd = () => {
  isShowModalAdd.value = false;
};

// REFETCH DATA
const handleRefetch = async () => {
  alert("handleRefetch");
};

const dataSource = [
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
];

const columns = [
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
  {
    title: "Action",
    key: "action",
  },
];
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
    <a-table :dataSource="dataSource" :columns="columns" bordered>
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
  </div>
</template>

<style setup>
.poiter {
  cursor: pointer;
}
</style>