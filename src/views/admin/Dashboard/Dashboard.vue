<script setup>
import { onMounted, ref } from "vue";
import Service from "../../../service/api";

const data = ref({});

const fetchData = async () => {
  const res = await Service.dashboard_DAT_HANG();
  if (res && res.data.EC === 0) {
    data.value = res.data.DT;
  }
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="row">
    <div class="col-lg col-md-3 dashboardItem mx-2 border ">
      <div class="p-2 fs-5">
        <div>Manager Book</div>
        <div>Total book : {{ data?.product }}</div>
      </div>
    </div>

    <div class="col-lg col-md-3 dashboardItem mx-2 border">
      <div class="p-2 fs-5">
        <div>Manager User</div>
        <div>Total Account : {{ data?.customers }}</div>
      </div>
    </div>

    <div class="col-lg col-md-3 dashboardItem mx-2 border">
      <div class="p-2 fs-5">
        <div>Manager Order</div>
        <div>Total Order : {{ data?.order }}</div>
      </div>
    </div>
  </div>
</template>



<style>
.dashboardItem {
  height: 150px;
  border-radius: 10px;
}
</style>