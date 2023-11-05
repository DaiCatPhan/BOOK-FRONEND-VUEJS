<script setup>
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import CardBook from "../../../components/CardBook/CardBook.vue";
import Service from "../../../service/api";
import { Pagination } from "ant-design-vue";

const activeKey = ref("1");
const sort = ref("");
const type = ref("");

// Xử lí pagination
const books = ref([]);
const current = ref(1);
const pageSize = ref(5);
const total = ref(20);

const onChangePagination = (page, pageSize) => {
  current.value = +page;
};

const handlePageSize = (page, newSize) => {
  pageSize.value = newSize;
};

// Gọi API lấy datas

const queryApi = computed(() => {
  if (sort.value) {
    return `?page=${+current.value}&limit=${+pageSize.value}&type=&sort=${
      sort.value
    }`;
  }
  return `?page=${+current.value}&limit=${+pageSize.value}`;
});

const fetchData = async () => {
  const data = await Service.readPanigate_HANG_HOA(queryApi.value);

  if (data && data.data.EC === 0 && data.data.DT.pagination.length > 0) {
    books.value = data.data.DT.pagination;
    total.value = data.data.DT?.meta?.total;
  }
};

watchEffect(() => {
  fetchData();
});
watch([current, pageSize, queryApi], () => {
  fetchData();
});

const caterory = ref([
  {
    id: 1,
    label: "toán",
    value: "toán",
  },
  {
    id: 2,
    label: "lý",
    value: "lý",
  },
  {
    id: 3,
    label: "hóa",
    value: "hóa",
  },
  {
    id: 4,
    label: "Cong nghe ",
    value: "CNTT",
  },
]);

const handleSelectType = (data) => {
  console.log("type", data);
  type.value = data;
};

const handleTabChange = (key) => {
  console.log("handleTabChange", key);
  sort.value = key;
  queryApi.value = `?page=${+current.value}&limit=${+pageSize.value}&sort=${key}`;
};
</script>


<template>
  <div>
    <div class="row min-vh-100">
      <div class="col-2 border px-5">
        <div>Bộ lọc tìm kiếm</div>
        <div>
          <div v-for="item in caterory" :key="item.id" class="my-2">
            <a-checkbox
              @click="() => handleSelectType(item.value)"
              :checked="item.value === type"
              >{{ item.label }}
            </a-checkbox>
          </div>
        </div>
      </div>

      <div class="col-10 border">
        <div class="p-3">
          <div>
            <a-tabs v-model="activeKey" @change="handleTabChange">
              <a-tab-pane key="" tab="Tất cả"> </a-tab-pane>
              <a-tab-pane key="createdAt" tab="Hàng mới"> </a-tab-pane>
              <a-tab-pane key="-Gia" tab="Giá cao đến thấp"> </a-tab-pane>
              <a-tab-pane key="Gia" tab="Giá thấp đến cao"> </a-tab-pane>
            </a-tabs>
          </div>

          <div>
            <div class="row border">
              <div
                class="col-lg-3 col-md-4 col-sm-6 my-3"
                v-for="book in books"
                :key="book.id"
              >
                <router-link :to="'/books/' + book?._id">
                  <CardBook
                    class="m-auto"
                    :name="book.TenHH"
                    :price="book.Gia"
                    :url="book.HinhHH"
                  />
                </router-link>
              </div>
            </div>
            <div class="text-center">
              <Pagination
                :current="current"
                :pageSize="pageSize"
                :total="total"
                :show-size-changer="true"
                :pageSizeOptions="['5', '10', '15']"
                @change="onChangePagination"
                @showSizeChange="handlePageSize"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
</style>