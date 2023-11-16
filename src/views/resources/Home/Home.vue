<script setup>
import { Icon24Hours, IconBus, IconStar } from "@tabler/icons-vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";

import { onMounted, ref } from "vue";
import Service from "../../../service/api";
import CardBook from "../../../components/CardBook/CardBook.vue";
import { IconRecharging } from "@tabler/icons-vue";
import { IconCash } from "@tabler/icons-vue";

const books = ref([]);

const fetchData = async () => {
  const res = await Service.readPanigate_HANG_HOA(
    "?sort=createdAt&page=1&limit=16"
  );

  if (res && res.data.EC === 0) {
    books.value = res.data.DT.pagination;
  }
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <!--  -->
    <section class="slideLogo">
      <div class="sectionFirst">
        <div class="row container m-auto">
          <div class="col-6 sectionFirst-sideLeft">
            <div class="py-5">
              <h1>Buy Your <span class="red">Best</span></h1>
              <h1>Books <span class="red">Here</span></h1>
              <p class="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda ad accusamus molestias illo iusto iste maiores
                perspiciatis odit ad accusamus molestias illo iusto iste maiores
                perspiciatis odit0
              </p>
              <button class="btn btn-dark text-white">Explore more</button>
            </div>
          </div>
          <div class="col sectionFirst-sideRight">
            <div class="d-flex justify-content-around">
              <img
                height="180"
                width="180"
                src="images/logoHome/anh1.jpg"
                alt="notFound"
                class="rounded"
              />
              <img
                height="180"
                width="180"
                src="images/logoHome/anh2.jpg"
                alt="notFound"
                class="rounded"
              />
            </div>
            <div class="d-flex justify-content-around my-4">
              <img
                height="180"
                width="180"
                src="images/logoHome/anh3.jpg"
                alt="notFound"
                class="rounded"
              />
              <img
                height="180"
                width="180"
                src="images/logoHome/anh4.jpg"
                alt="notFound"
                class="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section>
      <div class="row border">
        <div class="col-lg-3 col-md-4 col-sm-6">
          <img
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Quatang_FahasaT3_840x320_SmallBanner_310x210.png"
            alt="notFound"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <img
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/TrangThieuNhiT923_Banner_SmallBanner_310x210-22_1.png"
            alt="notFound"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <img
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/20_11_mainbanner_Smallbanner_310x210.png"
            alt="notFound"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <img
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/TopSanPhamT1023_Banner_SmallBanner_310x210.png"
            alt="notFound"
          />
        </div>
      </div>
    </section>

    <!--  -->
    <section>
      <div class="row">
        <img
          class="w-100"
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Fahasa_saleT3_Tuan2_LDP_Banner_01.png"
          alt=""
        />
      </div>
    </section>

    <!--  -->
    <section>
      <div class="m-auto text-center w-75 my-5">
        <div>
          <div>
            <h2>Popular <span class="red">Collections</span></h2>
          </div>
        </div>
        <div>
          <p class="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            voluptatibus quisquam corrupti asperiores voluptates? Aspernatur
            excepturi incidunt saepe porro expedita, perspiciatis vitae
          </p>
        </div>
        <div class="d-flex justify-content-between w-50 m-auto">
          <button class="btn btn-danger">Best Seller</button>
          <button class="btn border bg-light">Featured</button>
          <button class="btn border bg-light">Latest</button>
        </div>
      </div>
    </section>

    <!-- BOOK -->

    <section>
      <div class="row my-5">
        <div
          class="col-lg-3 col-md-4 col-sm-6 my-3"
          v-for="book in books.slice(0, 8)"
          :key="book.id"
        >
          <router-link :to="'/books/' + book._id">
            <CardBook
              class="m-auto"
              :name="book.TenHH"
              :price="book.Gia"
              :url="book.HinhHH"
            />
          </router-link>
        </div>
      </div>
    </section>

    <!--  -->
    <section>
      <div>
        <img
          class="w-100"
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/FahasaSaleThu3T1123_W1_LDP_BannerVoucher_1.jpg"
          alt=""
        />
      </div>
    </section>

    <div class="container">
      <!-- CARD BOOK -->
      <section>
        <div class="row my-5">
          <div
            class="col-lg-3 col-md-4 col-sm-6 my-3"
            v-for="book in books.slice(8, 16)"
            :key="book.id"
          >
            <router-link :to="'/books/' + book._id">
              <CardBook
                class="m-auto"
                :name="book.TenHH"
                :price="book.Gia"
                :url="book.HinhHH"
              />
            </router-link>
          </div>
        </div>
      </section>

      <!--  -->
      <section class="my-5">
        <div class="d-flex justify-content-between flex-wrap">
          <div
            class="d-flex align-items-center p-3 justify-content-between rounded"
          >
            <div>
              <IconBus />
            </div>
            <div class="mx-3">
              <div><b>Free Shipping</b></div>
              <div>Order over $300</div>
            </div>
          </div>

          <div
            class="d-flex align-items-center p-3 justify-content-between rounded"
          >
            <div>
              <IconCash />
            </div>
            <div class="mx-3">
              <div><b>Secure payment</b></div>
              <div>100% secure payment</div>
            </div>
          </div>

          <div
            class="d-flex align-items-center p-3 justify-content-between rounded"
          >
            <div>
              <IconRecharging />
            </div>
            <div class="mx-3">
              <div><b>Best Price</b></div>
              <div>Low cost</div>
            </div>
          </div>

          <div
            class="d-flex align-items-center p-3 justify-content-between rounded"
          >
            <div>
              <Icon24Hours />
            </div>
            <div class="mx-3">
              <div><b>Eazy return</b></div>
              <div>Within 20 days returns</div>
            </div>
          </div>
        </div>
      </section>

      <!--  -->
      <section class="border">
        <div class="w-100">
          <img
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/FahasaSaleThu3T1123_W1_LDP_BannerFlashSale_1200x450_1.jpg"
            alt=""
            class="w-100"
          />
        </div>
      </section>

      <!-- Slide -->
      <section class="my-5 rounded">
        <a-carousel
          :autoplay="true"
          :autoplaySpeed="2000"
          arrows
          infinite
          class="carousel"
        >
          <div
            class="d-flex justify-content-around align-items-center bg-white border itemCarousel rounded"
          >
            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_46272.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935212341134_1.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_228553.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935212365918.jpg"
                alt="not Found"
              />
            </div>
          </div>

          <div
            class="d-flex justify-content-around align-items-center bg-white border itemCarousel"
          >
            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935212358583_1.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935212360913.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/w/h/who---chuyen-ke-ve-danh-nhan-the-gioi-bill-gates---tb-2023.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244888423.jpg"
                alt="not Found"
              />
            </div>
          </div>

          <div
            class="d-flex justify-content-around align-items-center bg-white border itemCarousel"
          >
            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_18112.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_45918.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_28432.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/c/0/c04882e9c24e28adc2aba6b312bcc98b.jpg"
                alt="not Found"
              />
            </div>
          </div>

          <div
            class="d-flex justify-content-around align-items-center bg-white border itemCarousel"
          >
            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_18112.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935212348867.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/b/o/boxset-luoc-su-the-gioi-bang-tranh_17-cuon.jpg"
                alt="not Found"
              />
            </div>

            <div>
              <img
                height="150"
                width="150"
                src="https://cdn0.fahasa.com/media/catalog/product/b/i/bia1_thuong_1.jpg"
                alt="not Found"
              />
            </div>
          </div>
        </a-carousel>
      </section>

      <!-- CARD TYPE BOOK -->
      <section>
        <div class="row my-5">
          <div class="col-lg-4">
            <div class="cardBookType p-3">
              <div>
                <img
                  src="images/typebooks/economics.png"
                  alt="notFound"
                  height="50"
                  width="70"
                />
              </div>
              <div class="my-2"><b>Photography</b></div>
              <div>Lorem ipsum dolor</div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="cardBookType p-3">
              <div>
                <img
                  src="images/typebooks/burger.png"
                  alt="notFound"
                  height="50"
                  width="70"
                />
              </div>
              <div class="my-2"><b>Food and drink</b></div>
              <div>Lorem ipsum dolor</div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cardBookType p-3">
              <div>
                <img
                  src="images/typebooks/medical-records.png"
                  alt="notFound"
                  height="50"
                  width="70"
                />
              </div>
              <div class="my-2"><b>Health</b></div>
              <div>Lorem ipsum dolor</div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cardBookType p-3">
              <div>
                <img
                  src="images/typebooks/love.png"
                  alt="notFound"
                  height="50"
                  width="70"
                />
              </div>
              <div class="my-2"><b>Romantic</b></div>
              <div>Lorem ipsum dolor</div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cardBookType p-3">
              <div>
                <img
                  src="images/typebooks/motivational-book.png"
                  alt="notFound"
                  height="50"
                  width="70"
                />
              </div>
              <div class="my-2"><b>Biography</b></div>
              <div>Lorem ipsum dolor</div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cardBookType p-3">
              <div>
                <img
                  src="images/typebooks/history-book.png"
                  alt="notFound"
                  height="50"
                  width="70"
                />
              </div>
              <div class="my-2"><b>History</b></div>
              <div>Lorem ipsum dolor</div>
            </div>
          </div>
        </div>
      </section>

      <div class="border bg_fbfcd4 text-center">
        <img
          src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/FahasaSaleThu3T1123_W1_LDP_BannerNCCDinhTi.jpg"
          alt=""
          class="w-75"
        />
      </div>
    </div>

    <div>
      <div class="row">
        <div class="col-lg-4">
          <img
            class="w-100"
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Fahasa_saleT3_Tuan2_LDP_SKU_04.jpg"
            alt=""
          />
        </div>
        <div class="col-lg-4">
          <img
            class="w-100"
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Fahasa_saleT3_Tuan2_LDP_SKU_05.jpg"
            alt=""
          />
        </div>
        <div class="col-lg-4">
          <img
            class="w-100"
            src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Fahasa_saleT3_Tuan2_LDP_SKU_06.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template> 



<style scope>
.bg_fbfcd4 {
  background-color: #fbfcd4;
}
.red {
  color: red;
}
a {
  color: inherit;
  text-decoration: none;
}

/* -------------------- slideLogo ------------------*/

.sectionFirst {
  background-color: #effafa;
}

.sectionFirst-sideLeft {
  padding: 0 40px;
}

.sectionFirst-sideRight {
  padding: 20px;
}

/*-------------------- CARD TYPE BOOK------------------ */

/* For demo */
.slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.slick-arrow.custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
.slick-arrow.custom-slick-arrow:before {
  display: none;
}
.slick-arrow.custom-slick-arrow:hover {
  color: #fff;
  opacity: 0.5;
}

.slick-slide h3 {
  color: #fff;
}

.itemCarousel,
.carousel {
  height: 200px;
}

.cardBookType {
  border: 1px solid rgb(207, 201, 201);
  min-width: 280px;
  height: 150px;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
}
</style>