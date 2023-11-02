<script setup>
import { IconBus, IconStar } from "@tabler/icons-vue";
import CardBook from "../../../components/CardBook/CardBook.vue";
import CardTypeBook from "../../../components/CardTypeBook/CardTypeBook.vue";

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
</script>

<template>
  <div>
    <section class="slideLogo ">
      <div class="sectionFirst">
        <div class="row container m-auto">
          <div class="col-6 sectionFirst-sideLeft">
            <h1>Buy Your <span class="red">Best</span></h1>
            <h1>Books <span class="red">Here</span></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ad accusamus molestias illo iusto iste maiores perspiciatis odit
              ad accusamus molestias illo iusto iste maiores perspiciatis odit0
            </p>
            <button class="btn btn-dark text-white">Explore more</button>
          </div>
          <div class="col sectionFirst-sideRight">
            <div class=" ">
              <img
                height="200"
                width="200"
                src="/images/booklogo.jpg"
                alt="notFound"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <!--  -->
      <section class="my-5">
        <div class="d-flex justify-content-between flex-wrap">
          <div
            class="d-flex align-items-center border p-3 justify-content-between rounded"
          >
            <div>
              <IconBus />
            </div>
            <div class="mx-3">
              <div>Free Shipping</div>
              <div>Free Shipping</div>
            </div>
          </div>

          <div
            class="d-flex align-items-center border p-3 justify-content-between rounded"
          >
            <div>
              <IconBus />
            </div>
            <div class="mx-3">
              <div>Free Shipping</div>
              <div>Free Shipping</div>
            </div>
          </div>

          <div
            class="d-flex align-items-center border p-3 justify-content-between rounded"
          >
            <div>
              <IconBus />
            </div>
            <div class="mx-3">
              <div>Free Shipping</div>
              <div>Free Shipping</div>
            </div>
          </div>

          <div
            class="d-flex align-items-center border p-3 justify-content-between rounded"
          >
            <div>
              <IconBus />
            </div>
            <div class="mx-3">
              <div>Free Shipping</div>
              <div>Free Shipping</div>
            </div>
          </div>
        </div>
      </section>

      <!--  -->
      <section>
        <div class="m-auto text-center border w-75 my-5">
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

      <!-- CARD BOOK -->
      <section>
        <div class="row my-5">
          <div
            class="col-lg-3 col-md-4 col-sm-6 my-3"
            v-for="book in books"
            :key="book.id"
          >
            <CardBook
              class="m-auto"
              :name="book.name"
              :price="book.price"
              :url="book.url"
            />
          </div>
        </div>
      </section>

      <!-- CARD TYPE BOOK -->
      <section>
        <div class="row border my-5">
          <div class="col-lg-4">
            <router-link to="/home"><CardTypeBook /></router-link>
          </div>

          <div class="col-lg-4"><CardTypeBook /></div>
          <div class="col-lg-4"><CardTypeBook /></div>
          <div class="col-lg-4"><CardTypeBook /></div>
          <div class="col-lg-4"><CardTypeBook /></div>
          <div class="col-lg-4"><CardTypeBook /></div>
        </div>
      </section>

      <section></section>
    </div>
  </div>
</template>



<style setup>
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
  border: 1px solid red;
  padding: 75px 40px;
}

.sectionFirst-sideRight {
  border: 1px solid blue;
  padding: 75px;
}

/*-------------------- CARD TYPE BOOK------------------ */
</style>