<script setup>
import { onMounted, ref, watchEffect } from "vue";
import moment from "moment";

const props = defineProps({
  closeModalUpdate: Function,
  isShowModalUpdate: Boolean,
  dataModalUpdate: Object,
});

const _id = ref("");
const Date_GH = ref(null);

const TrangthaiHD = ref(0);
const Email = ref("");
const Date_DH = ref(null);

watchEffect(() => {
  _id.value = props?.dataModalUpdate?._id;
  TrangthaiHD.value = props?.dataModalUpdate?.TrangthaiHD;
  Email.value = props?.dataModalUpdate?.MSKH?.Email;
  Date_DH.value = props?.dataModalUpdate?.NgayDH;
});

const handleOk = () => {
  const dataUpdate = {
    id: _id.value,
    TrangthaiHD: TrangthaiHD.value,
    DateGH: Date_GH.value,
  };

  console.log("ok", dataUpdate);
};

const handleChange = (value) => {
  TrangthaiHD.value = value;
  console.log(`selected ${value}`);
};

// Chọn ngay Giao hàng dự kiên
const onChangeDate_DuKien = (data) => {
  Date_GH.value = data?.$d;
  console.log("onChangeDate_DuKien", data?.$d);
};

const onChangeDate_GiaoHang = (data) => {
  Date_GH.value = data?.$d;
  console.log("onChangeDate_GiaoHang", data?.$d);
};
</script>


<template>
  <div>
    <a-modal
      :open="props.isShowModalUpdate"
      title="Cập nhật trạng thái đặt hàng "
      @ok="handleOk"
      @cancel="closeModalUpdate"
      :style="{ top: '10px' }"
      :width="700"
    >
      <form>
        <div>
          <div>ID đơn hàng : {{ _id }}</div>
          <div>Email khác hàng : {{ Email }}</div>
          <div>Ngày đặt hàng : {{ moment(Date_DH).format("DD/MM/YYYY") }}</div>
        </div>

        <div class="d-flex justify-content-between">
          <div>
            <div>Cập nhật trạng thái</div>
            <a-select
              ref="select"
              :value="TrangthaiHD"
              style="width: 220px"
              @change="handleChange"
            >
              <a-select-option value="0">Chưa duyệt</a-select-option>
              <a-select-option value="1">Duyệt đơn hàng</a-select-option>
              <a-select-option value="2">Đơn hàng đã giao</a-select-option>
              <a-select-option value="3">Đơn hàng bị hủy</a-select-option>
            </a-select>
          </div>

          <div v-if="TrangthaiHD === '1'">
            <div>Chọn ngày dự kiến giao hàng giao hàng</div>
            <div>
              <a-date-picker
                v-model="DateGH"
                @change="onChangeDate_DuKien"
                format="DD/MM/YYYY"
              />
            </div>
          </div>

          <div v-if="TrangthaiHD === '2'">
            <div>Ngày đã giao hàng</div>
            <div>
              <a-date-picker
                v-model="DateGH"
                @change="onChangeDate_GiaoHang"
                format="DD/MM/YYYY"
              />
            </div>
          </div>

          <div v-if="TrangthaiHD === '3'">
            <div>Hủy giao hàng</div>
            <div>
              <a-date-picker
                v-model="DateGH"
                @change="onChangeDate_GiaoHang"
                format="DD/MM/YYYY"
              />
            </div>
          </div>
        </div>
      </form>
    </a-modal>
  </div>
</template>



<style>
</style>