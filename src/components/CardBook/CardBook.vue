

<script setup>
import { IconStar, IconStarFilled } from "@tabler/icons-vue";
import { ref } from "vue";

const props = defineProps({
  name: String,
  price: Number,
  url: String,
});

const value = ref(4);
</script>

<template>
  <div class="cardBook rounded">
    <div class="cardImage text-center">
      <img
        :src="props?.url"
        alt="notFound"
        height="150"
        width="100"
        class="object-fit-cover"
      />
    </div>
    <div class="text-center border-top cardBody">
      <div class="text-ellipsis text-truncate overflow-hidden">
        {{ props?.name }}
      </div>
      <div class="red">{{ props?.price?.toLocaleString("vi-VN") }} đ</div>
      <div class="d-flex justify-content-between w-75 m-auto">
        <a-rate :value="value" :style="{ 'font-size': '14px' }" />
      </div>
    </div>
  </div>
</template>

<style>
/* #eeeeee */
.cardBook {
  width: 170px;
  border: 1px solid rgb(224, 217, 217);
  margin: 10px 0;
}
.cardImage {
  padding: 10px;
  background-color: #eeeeee;
}

.cardBody {
  padding: 10px;
}
</style>