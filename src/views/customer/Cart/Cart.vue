<script setup>
import { IconMoodSmileBeam } from "@tabler/icons-vue";
import { IconTrash } from "@tabler/icons-vue";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { reactive } from "vue";
import { string } from "vue-types";
import { useRoute, useRouter } from "vue-router";
import Service from "../../../service/api";
import getProfilePinia from "../../../components/getDatainPinia/getDatainPinia";

import { authenticationStore } from "../../../stores/authenticationStore";

const authentication = authenticationStore();

const profile = ref({});
const idUser = ref("");
const router = useRouter();
const currentStep = ref(0);
const cart = ref([]);

const HoTen = ref("");
const SoDienThoai = ref(0);
const DiaChi = ref("");

const fetchData = async () => {
  try {
    const res = await Service.readPanigation_VO_HANG(
      `?IdUser=${profile.value._id}`
    );
    if (res && res.data.EC === 0) {
      cart.value = res.data.DT;
    }
  } catch (error) {
    console.log("error", error);
  }
};
watch(() => {
  profile.value = authentication.getUser();
  HoTen.value  = profile.value.HoTen;
  SoDienThoai.value  = profile.value.SoDienThoai;
  DiaChi.value  = profile.value.DiaChi;
  fetchData();
});

const totalSumPrice = computed(() => {
  if (cart.value.length > 0) {
    return cart.value.reduce((total, item) => {
      return (total += item.SoLuong * item.IdHangHoa.Gia);
    }, 0);
  } else {
    return 0;
  }
});

const handleDeleteBook = async (data) => {
  const res = await Service.deleteItem_VO_HANG({
    idCart: data._id,
  });

  fetchData();
};

// Xử lí current 0
const handleStepsFirst = async () => {
  currentStep.value = 1;
};

// Xử lí current 1
const handleStepsSecond = async () => {
  // Update người dùng

  // Đặt hàng

  // Chuyển hướng
  currentStep.value = 2;
};

// Xử lí current 2
const handleStepsThird = async () => {
  router.push("/history");
};

const handleUpdateNumbetApi = async (idCart, SoLuong) => {
  const res = await Service.updateNumBer_VO_HANG({
    idCart: idCart,
    SoLuong: SoLuong,
  });

  fetchData();
};

// Thay đổi input number
const handleUpdateNumber = (item, newQuantity) => {
  handleUpdateNumbetApi(item._id, newQuantity);
};
</script>

<template>
  <div class="min-vh-100 border bg-light">
    <div class="row m-5">
      <a-steps
        :current="currentStep"
        size="small"
        :items="[
          {
            title: 'Đơn hàng',
          },
          {
            title: 'Đặt hàng',
          },
          {
            title: 'Thành công',
          },
        ]"
      ></a-steps>
    </div>

    <div>
      <div v-if="cart <= 0">
        <a-empty />
      </div>
      <div v-else>
        <div class="row m-5" style="min-height: 22vh" v-if="currentStep === 0">
          <div class="col-lg-8">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center border mb-4 rounded bg-white"
              v-for="item in cart"
              :key="item._id"
            >
              <div class="image-container">
                <img
                  :src="item?.IdHangHoa?.HinhHH"
                  alt="notFound"
                  class="centered-image"
                />
              </div>
              <div class="nameWidth">{{ item?.IdHangHoa?.TenHH }}</div>
              <div>
                {{ item?.IdHangHoa?.Gia?.toLocaleString("vi-VN") || 0 }} đ
              </div>
              <div>
                <a-input-number
                  :value="item?.SoLuong"
                  :min="1"
                  :max="100"
                  @update:value="
                    (newQuantity) => handleUpdateNumber(item, newQuantity)
                  "
                />
              </div>
              <div>
                Tổng :
                {{
                  (item?.IdHangHoa?.Gia * item?.SoLuong).toLocaleString(
                    "vi-VN"
                  ) || 0
                }}đ
              </div>
              <div>
                <IconTrash
                  class="poiter mx-3"
                  style="color: red"
                  @click="() => handleDeleteBook(item)"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="bg-white rounded p-4 border">
              <div class="d-flex justify-content-between">
                <div>Tạm tính</div>
                <div>{{ totalSumPrice?.toLocaleString("vi-VN") || 0 }} đ</div>
              </div>
              <hr />
              <div class="d-flex justify-content-between align-items-center">
                <div>Tổng tiền</div>
                <div class="price fs-3">
                  {{ totalSumPrice?.toLocaleString("vi-VN") || 0 }} đ
                </div>
              </div>
              <hr />
              <div class="text-center">
                <button
                  class="px-5 border border-danger btn-warning btn text-white"
                  @click="handleStepsFirst"
                >
                  Mua hàng
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row m-5" style="min-height: 22vh" v-if="currentStep === 1">
          <div class="col-lg-8">
            <div
              class="d-flex flex-wrap justify-content-around align-items-center border mb-4 rounded bg-white"
              v-for="item in cart"
              :key="item._id"
            >
              <div class="image-container">
                <img
                  :src="item?.IdHangHoa?.HinhHH"
                  alt="notFound"
                  class="centered-image"
                />
              </div>
              <div class="nameWidth">{{ item?.IdHangHoa?.TenHH }}</div>
              <div>
                {{ item?.IdHangHoa?.Gia.toLocaleString("vi-VN") || 0 }} đ
              </div>
              <div>
                <a-input-number
                  :value="item?.SoLuong"
                  :min="1"
                  :max="100"
                  :disabled="true"
                />
              </div>
              <div>
                {{
                  (item.IdHangHoa?.Gia * item.SoLuong).toLocaleString(
                    "vi-VN"
                  ) || 0
                }}đ
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white rounded p-4 border">
              <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input
                  disabled
                  :value="profile.Email"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Họ và tên</label>
                <input
                  v-model="profile.HoTen"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Số điện thoại</label>
                <input
                  v-model="profile.SoDienThoai"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Địa chỉ giao hàng</label>
              </div>
              <div class="mb-3">
                <label checked class="form-label text-secondary"
                  >Hình thức thanh toán</label
                >
                <div>
                  <input type="radio" checked /> Thanh toán khi nhận hàng
                </div>
              </div>
              <hr />
              <div class="d-flex justify-content-around align-items-center">
                <div>Tổng tiền</div>
                <div class="price fs-3">
                  {{ totalSumPrice?.toLocaleString("vi-VN") || 0 }} đ
                </div>
              </div>
              <hr />
              <div class="text-center">
                <button
                  class="px-5 btn btn-warning text-white"
                  @click="handleStepsSecond"
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row m-5" style="min-height: 22vh" v-if="currentStep === 2">
          <a-result title="Great, we have done all the operations!">
            <template #icon>
              <IconMoodSmileBeam
                :style="{ height: '100px', width: '100px', color: 'blue' }"
              />
            </template>
            <template #extra>
              <a-button type="primary" @click="handleStepsThird"
                >Xem lịch sử</a-button
              >
            </template>
          </a-result>
        </div>
      </div>
    </div>
  </div>
</template>



<style setup>
.image-container {
  width: 100px; /* Độ rộng của khung chứa */
  height: 140px; /* Độ cao của khung chứa */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
}

.centered-image {
  object-fit: cover; /* Điều chỉnh để hình ảnh không bị méo hoặc lệch */
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.poiter {
  cursor: pointer;
}

.nameWidth {
  width: 320px;
}
</style>