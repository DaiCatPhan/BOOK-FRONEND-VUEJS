<script setup>
import { IconPlus } from "@tabler/icons-vue";
import { IconMinus } from "@tabler/icons-vue";
import { IconArrowBackUp } from "@tabler/icons-vue";
import { message } from "ant-design-vue";

import { computed, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import { authenticationStore } from "../../../stores/authenticationStore";

import ModalLogin from "../../../layouts/componentLayouts/ModalLogin/ModalLogin.vue";
import Service from "../../../service/api";

//==== Xử lí khi chưa đăng nhập
const authenticaiton = authenticationStore();
const isLogin = ref(false);
const profile = ref({});

const isShowModalLogin = ref(false);

const OpenModalLogin = () => {
  isShowModalLogin.value = true;
};
const closeModalLogin = () => {
  isShowModalLogin.value = false;
};

watchEffect(() => {
  isLogin.value = authenticaiton.getStateLogin();
  profile.value = authenticaiton.getUser();
});

// ===============================

const router = useRouter();
const idBook = ref(useRoute().params.id);

const bookDetail = ref({});

const fetchData = async () => {
  const data = await Service.read_HANG_HOA({ idProduct: idBook.value });

  if (data && data.data.EC === 0) {
    bookDetail.value = data.data.DT;
  }
};
watchEffect(() => {
  fetchData();
});

const value = ref(5);
const numberBook = ref(1);

const handleMinusNumber = () => {
  if (numberBook.value > 1) {
    numberBook.value -= 1;
  }
};

const handlePlusNumber = () => {
  numberBook.value += 1;
};

// Xử lí thêm vào vỏ hàng

const handleAddCart = async () => {
  // Kiểm tra đã login hay chưa
  if (isLogin.value === false) {
    OpenModalLogin();
    return;
  }
  //
  const Cart = {
    IdUser: profile.value._id,
    IdHangHoa: bookDetail.value._id,
    SoLuong: numberBook.value,
  };

  const res = await Service.create_VO_HANG(Cart);
  if (res && res.data && res.data.EC === 0) {
    message.success("Thêm vỏ hàng thành công");
  } else {
    message.success(res.data.EM);
  }
};

// Xử lí mua hàng

const handleBuyBook = async () => {
  alert("handleBuyBook");
};
</script>
<template>
  <div class="min-vh-75 border bg-secondary-subtle">
    <div class="bodyBookDetail positon-relative">
      <router-link to="/books">
        <IconArrowBackUp
          class="position-absolute mx-2"
          style="color: blue; width: 40px"
          @click="handleBackIcon"
        />
      </router-link>
      <div class="row">
        <div class="col-5">
          <div class="image-container">
            <img
              :src="bookDetail?.HinhHH"
              alt="notFound"
              class="centered-image"
            />
          </div>
        </div>
        <div class="col-7 py-4 px-4">
          <div class="w-100 h-100 d-flex flex-column justify-content-between">
            <div>
              <div class="mb-2">
                Tác giả :
                <span class="text-primary">{{ bookDetail?.TacGia }}</span>
              </div>
              <div>
                <h4 class="text-secondary">
                  {{ bookDetail?.TenHH }}
                </h4>
              </div>
              <div>
                <a-rate :value="value" :style="{ 'font-size': '12px' }" />
              </div>
            </div>
            <div class="p-3 bg-light fs-3 price">
              {{ bookDetail?.Gia?.toLocaleString("vi-VN") || 0 }} vnd
            </div>
            <div>Vận chuyển : Miễn phí vận chuyển</div>
            <div class="d-flex">
              <div>Số lượng</div>
              <div class="d-flex mx-5 gap-3">
                <div class="poiter">
                  <IconMinus @click="handleMinusNumber" />
                </div>
                <div>{{ numberBook }}</div>
                <div class="poiter"><IconPlus @click="handlePlusNumber" /></div>
              </div>
            </div>
            <div class="d-flex">
              <div>
                <button class="btn btn_addCart" @click="handleAddCart">
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="description px-5">
          <h5>Mô tả sản phẩm</h5>
          <p>
            {{ bookDetail?.MoTaHH }}
          </p>
        </div>
      </div>
    </div>
    <ModalLogin
      :isShowModalLogin="isShowModalLogin"
      :closeModalLogin="closeModalLogin"
    />
  </div>
</template>



<style scoped>
.price {
  color: orange;
  font-weight: 600;
}
.bodyBookDetail {
  background-color: white;
  margin: 50px 80px;
  padding: 15px 0;
}

.image-container {
  width: 400px; /* Độ rộng của khung chứa */
  height: 400px; /* Độ cao của khung chứa */
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-image {
  object-fit: cover; /* Điều chỉnh để hình ảnh không bị méo hoặc lệch */
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.btn_addCart {
  background-color: #ffefe8;
  border: 1px solid #e6a98f;
  color: #f76538;
}

.btn_addCart:hover {
  background-color: #f0885c;
  color: white;
}

.poiter {
  cursor: pointer;
}
</style>