<template>
  <v-icon class="image-close-icon">mdi-close-circle-outline</v-icon>
  <swiper
    :slides-per-view="1"
    :space-between="15"
    :loop="true"
    :initialSlide="selectedImageNumber"
    :pagination="myPaginationStyle"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    style="color: #fff"
  >
    <swiper-slide v-for="(item, i) in imageItems" :key="i">
      <v-img :src="item.imageSrc"></v-img>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";

// Props
const props = defineProps<{
  imageItems: any;
  selectedImageNumber :number;
}>();

// data
const myPaginationStyle = {
  clickable: true,
  type: "fraction",
};
const modules = [Pagination];

// methods
const onSwiper = (swiper: any) => {
  console.log(swiper);
  console.log(props.imageItems);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style lang="scss">
.swiper-pagination {
display: flex;
justify-content: center;
justify-items: center;
}
.image-close-icon{
  position:absolute;
  right:0px;
  top:-30px;
  z-index: 99;
}
</style>
