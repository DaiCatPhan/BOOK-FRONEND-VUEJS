<script setup>
import { IconPlus } from "@tabler/icons-vue";
import { IconMinus } from "@tabler/icons-vue";
import { ref } from "vue";

const value = ref(5);
const numberBook = ref(1);

const bookDetail = ref({
  TenHH: "Chiến tranh tiền tệ",
  MoTaHH: "Sản phẩm số 1 việt Nam",
  Gia: 150000,
  SoLuongHang: 100,
  GhiChu: "Sản phẩm số 1 Việt Nam",
  TheLoai: "kinh tế",
  TacGia: "Son Ho Bin",
  HinhHH:
    "https://bizweb.dktcdn.net/100/180/408/products/chien-tranh-tien-te-1-c0c72970-7152-44f1-b27f-10e698f2acff.jpg?v=1667607754867",
});

const handleMinusNumber = () => {
  if (numberBook.value > 1) {
    numberBook.value -= 1;
  }
};

const handlePlusNumber = () => {
  numberBook.value += 1;
};
</script>
<template>
  <div class="min-vh-75 border bg-secondary-subtle">
    <div class="row bodyBookDetail">
      <div class="col-5">
        <div class="image-container">
          <img :src="bookDetail.HinhHH" alt="notFound" class="centered-image" />
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
            {{ bookDetail?.Gia.toLocaleString("vi-VN") }} vnd
          </div>
          <div>Vận chuyển : Miễn phí vận chuyển</div>
          <div class="d-flex">
            <div>Số lượng</div>
            <div class="d-flex mx-5 gap-3">
              <div class="poiter"><IconMinus @click="handleMinusNumber" /></div>
              <div>{{ numberBook }}</div>
              <div class="poiter"><IconPlus @click="handlePlusNumber" /></div>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <button class="btn btn_addCart">Thêm vào giỏ hàng</button>
            </div>
            <div>
              <button class="btn btn-danger mx-3">Mua ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style setup>
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