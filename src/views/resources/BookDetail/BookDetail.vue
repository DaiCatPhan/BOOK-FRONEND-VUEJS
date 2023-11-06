<script setup>
import { IconPlus } from "@tabler/icons-vue";
import { IconMinus } from "@tabler/icons-vue";
import { IconArrowBackUp } from "@tabler/icons-vue";

import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import Service from "../../../service/api";

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

function addToCart(product) {
  // Kiểm tra xem localStorage đã có giỏ hàng chưa
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  const existingProduct = cart.find((item) => item._id === product.idBook);
  if (existingProduct) {
    // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm trong giỏ hàng
    existingProduct.SoLuong += product.SoLuong;
  } else {
    cart.push({
      SoLuong: product.SoLuong,
      _id: product.idBook,
      bookDetail: product.bookDetail,
    });
  }

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}
const handleAddCart = async () => {
  const dataLocal = {
    SoLuong: numberBook.value,
    idBook: idBook.value,
    bookDetail: bookDetail.value,
  };
  addToCart(dataLocal);
  router.push("/order");
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
              <div>
                <button class="btn btn-danger mx-3" @click="handleBuyBook">
                  Mua ngay
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
            Trong một mớ “vàng thau lẫn lộn” của những cuốn sách về chứng khoán,
            có một cuốn sách kinh điển gây ảnh hưởng sâu sắc tới hàng triệu nhà
            đầu tư trên thế giới đó chính là cuốn sách Điều Quan Trọng Nhất –
            The Most Important Thing của Howard Marks. Cuốn sách này thực sự
            được coi là một cuốn cẩm nang về đầu tư chứng khoán nói chung và đầu
            tư giá trị (value investing) nói riêng. Howard Marks – Chủ tịch kiêm
            đồng sáng lập của Quỹ đầu tư Oak Tree Capital, vốn dự định viết cuốn
            sách này khi ông nghỉ hưu. Nhưng huyền thoại đầu tư Warren Buffett
            ngưỡng mộ Howard Marks đến nỗi, ông đã đề nghị viết lời giới thiệu
            cho cuốn sách này nếu Marks đồng ý xuất bản nó sớm hơn. Và kết quả
            là, chúng ta đã có thêm một cuốn sách “hiếm có và cực kỳ hữu ích”
            như lời Buffett. Với lối viết rõ ràng, mạch lạc và đầy tính thuyết
            phục, Howard Marks đã trình bày toàn bộ những quan điểm của ông về
            những điều ông coi là quan trọng nhất khi đầu tư chứng khoán như:
          </p>
        </div>
      </div>
    </div>
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