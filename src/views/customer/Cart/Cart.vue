<script setup>
import { IconMoodSmileBeam } from "@tabler/icons-vue";
import { IconTrash } from "@tabler/icons-vue";
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { reactive } from "vue";
import { string } from "vue-types";

const currentStep = ref(0);
const cart = ref([]);

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

const deleteItemCart = (idBook) => {
  // Lấy giỏ hàng từ localStorage
  const cartFromLocalStorage = getCart();

  // Lọc ra các mục mà bạn muốn giữ lại
  const updatedCart = cartFromLocalStorage.filter(
    (item) => item._id !== idBook
  );

  // Cập nhật giỏ hàng trong localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // Cập nhật giỏ hàng bằng giá trị mới
  cart.value = updatedCart;
};

onMounted(() => {
  cart.value = getCart();
});

const totalSumPrice = computed(() => {
  if (cart.value.length > 0) {
    let sum = 0;

    cart.value.map((item) => {
      sum += item.SoLuong * item.bookDetail.Gia;
    });
    return sum;
  }
});

const handleDeleteBook = (data) => {
  deleteItemCart(data._id);
};

const updateNumber = (value) => {
  numberBook.value = value;
};

// Xử lí current 0
const handleStepsFirst = async () => {
  currentStep.value = 1;
};
// Xử lí current 0 -------------------------------------------------------------------

// Xử lí current 1
const handleStepsSecond = async () => {
  currentStep.value = 2;
};
// Xử lí current 1

// Xử lí current 2
const handleStepsThird = async () => {
  alert("ok");
};
// Xử lí current 2

// FORM Đăng Ký thong tin đặt Tour
const handleBooking = async () => {
  console.log("handleBooking", handleBooking);
};
// FORM Đăng Ký thong tin đặt Tour
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
                  :src="item?.bookDetail?.HinhHH"
                  alt="notFound"
                  class="centered-image"
                />
              </div>
              <div class="nameWidth">{{ item?.bookDetail?.TenHH }}</div>
              <div>{{ item?.bookDetail?.Gia.toLocaleString("vi-VN") || 0 }} đ</div>
              <div>
                <a-input-number
                  :value="item?.SoLuong"
                  :min="1"
                  :max="100"
                  @change="updateNumber"
                />
              </div>
              <div>Tổng : {{ item?.TongTien.toLocaleString("vi-VN") || 0 }}đ</div>
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
              class="d-flex flex-wrap justify-content-between align-items-center border mb-4 rounded bg-white"
            >
              <div class="image-container">
                <img
                  src="https://bizweb.dktcdn.net/100/180/408/products/chien-tranh-tien-te-1-c0c72970-7152-44f1-b27f-10e698f2acff.jpg?v=1667607754867"
                  alt="notFound"
                  class="centered-image"
                />
              </div>
              <div>Chiến tranh tiền tệ</div>
              <div>150.000 vnd</div>
              <div>
                <a-input-number
                  :value="numberBook"
                  :min="1"
                  :max="100"
                  @change="updateNumber"
                />
              </div>
              <div>
                <IconTrash
                  class="poiter mx-3"
                  style="color: red"
                  @click="handleDeleteBook"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white rounded p-4 border">
              <div class="mb-3">
                <label for="" class="form-label">Họ và tên</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Họ và tên</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Địa chỉ</label>
              </div>
              <div class="mb-3">
                <label checked for="" class="form-label text-secondary"
                  >Hình thức thanh toán</label
                >
                <div>
                  <input type="radio" checked /> Thanh toán khi nhận hàng
                </div>
              </div>
              <hr />
              <div class="d-flex justify-content-around align-items-center">
                <div>Tổng tiền</div>
                <div class="price fs-3">150.000 đ</div>
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