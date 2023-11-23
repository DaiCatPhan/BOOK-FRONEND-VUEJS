<script setup>
import { authenticationStore } from "../../../stores/authenticationStore";
</script>

<template>
  <div>
    <div class="profile d-flex justify-content-center">
      <div class="row w-100">
        <div class="col-lg">
          <div
            class="d-flex flex-column justify-content-around align-items-center h-75"
          >
            <div class="border border-danger w-25"></div>
            <div class="title">P R O F I L E</div>
            <div>
              <div class="mb-3">
                Email : {{ authenticationStore()?.getUser()?._Email || "" }}
              </div>
              <div>
                Họ và tên : {{ authenticationStore()?.getUser()?._HoTen || "" }}
              </div>
            </div>
            <div>
              <router-link to="/"
                ><button class="btn btn-danger text-white">
                  H E A D H O M E
                </button></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg">
          <div class="text-center">
            <img src="/public/images/profile.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.profile {
  border: 1px solid red;
  min-height: 80vh;
  padding: 100px;
}

.title {
  font-weight: 700;
  font-size: 25px;
}
</style>