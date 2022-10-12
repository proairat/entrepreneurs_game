<template>
  <Swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper item-b"
  >
    <SwiperSlide v-for="item in items" :key="item.id">
      <div class="wrapper padded-container">
        <img :src="item.src" class="centered" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

// const modules = [Autoplay, Pagination, Navigation];
const modules = [Pagination, Navigation];
const items = reactive([
  { id: 1, src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" },
  { id: 2, src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" },
  { id: 3, src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" },
]);
</script>

<style lang="scss">
.mySwiper {
  user-select: none;
}

.swiper-pagination-bullet {
  width: 30px;
  height: 3px;
  line-height: 20px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 0;
}

.swiper-button-prev {
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22%23fff%22%3E%3Cpath d=%22M11.354 1.646a.5.5.0 010 .708L5.707 8l5.647 5.646a.5.5.0 01-.708.708l-6-6a.5.5.0 010-.708l6-6a.5.5.0 01.708.0z%22/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
}

.swiper-button-next {
  background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22%23fff%22%3E%3Cpath d=%22M4.646 1.646a.5.5.0 01.708.0l6 6a.5.5.0 010 .708l-6 6a.5.5.0 01-.708-.708L10.293 8 4.646 2.354a.5.5.0 010-.708z%22/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}
</style>
