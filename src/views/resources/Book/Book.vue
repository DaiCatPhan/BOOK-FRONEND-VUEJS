<script setup>
import { ref } from "vue";
import CardBook from "../../../components/CardBook/CardBook.vue";

const activeKey = ref("1");
const type = ref("");
const sort = ref("");

const books = [
  {
    id: 1,
    name: "Chiến tranh tiền tệ 1 Chiến tranh tiền tệ 1",
    price: "30.00",
    url: "https://bizweb.dktcdn.net/100/180/408/products/chien-tranh-tien-te-1-c0c72970-7152-44f1-b27f-10e698f2acff.jpg?v=1667607754867",
  },
  {
    id: 2,
    name: "Chiến tranh tiền tệ 2",
    price: "30.00",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/c2/3a/64/feedafb39c7bc93f49277bef45f618d4.jpg",
  },
  {
    id: 3,
    name: "Chiến tranh tiền tệ 4",
    price: "30.00",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/c2/3a/64/feedafb39c7bc93f49277bef45f618d4.jpg",
  },
  {
    id: 4,
    name: "Chiến tranh tiền tệ 5",
    price: "30.00",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/c2/3a/64/feedafb39c7bc93f49277bef45f618d4.jpg",
  },
  {
    id: 4,
    name: "Chiến tranh tiền tệ 5",
    price: "30.00",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/c2/3a/64/feedafb39c7bc93f49277bef45f618d4.jpg",
  },
  {
    id: 4,
    name: "Chiến tranh tiền tệ 5",
    price: "30.00",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/c2/3a/64/feedafb39c7bc93f49277bef45f618d4.jpg",
  },
  {
    id: 4,
    name: "Chiến tranh tiền tệ 5",
    price: "30.00",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/c2/3a/64/feedafb39c7bc93f49277bef45f618d4.jpg",
  },
  {
    id: 4,
    name: "Chiến tranh tiền tệ 5",
    price: "30.00",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/c2/3a/64/feedafb39c7bc93f49277bef45f618d4.jpg",
  },
];

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
  type.value = data;
};

const handleTabChange = (key) => {
  sort.value = key;
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
              <a-tab-pane key="-price" tab="Giá cao đến thấp"> </a-tab-pane>
              <a-tab-pane key="price" tab="Giá thấp đến cao"> </a-tab-pane>
            </a-tabs>
          </div>

          <div>
            <div class="row border">
              <div
                class="col-lg-3 col-md-4 col-sm-6 my-3"
                v-for="book in books"
                :key="book.id"
              >
                <router-link :to="'/books/' + book.id">
                  <CardBook
                    class="m-auto"
                    :name="book.name"
                    :price="book.price"
                    :url="book.url"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>



<style>
</style>