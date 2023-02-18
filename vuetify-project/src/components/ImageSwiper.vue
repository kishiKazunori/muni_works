<template>
  <swiper
    :slides-per-view="1"
    :space-between="15"
    :initialSlide="selectedImageNumber"
    :pagination="myPaginationStyle"
    :modules="modules"
    @tap="tapEvent"
    @swiper="setSwiperRef"
    style="color: #fff"
  >
    <swiper-slide v-for="(item, i) in swiperImageItems" :key="i">
      <v-img
        :src="item.imageSrc"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              indeterminate
              color="grey-lighten-4"
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import { ref } from "vue";
import "swiper/css";
// import "swiper/css/pagination";

// Props
const props = defineProps<{
  swiperImageItems: any;
  selectedImageNumber: number;
  windowSize: number;
}>();

// data
const myPaginationStyle = {
  clickable: true,
  PaginationOptions: { type: "fraction" },
};
const modules = [Pagination];
let swiperRef: any = null;

// methods
const setSwiperRef = (swiper: object) => {
  swiperRef = swiper;
};
const tapEvent = (imageTarget: any) => {
  let nowIndex = swiperRef.realIndex;
  const windowCenter = props.windowSize / 2;
  const toucheImageX = imageTarget.touches.currentX;
  if (swiperRef !== null) {
    if (windowCenter <= toucheImageX) {
      swiperRef.slideTo(nowIndex + 1);
    } else if (windowCenter > toucheImageX) {
      swiperRef.slideTo(nowIndex - 1);
    }
  }
};
// methods
// const onSwiper = (swiper: any) => {
//   console.log(swiper.value);
// };
// const onSlideChange = () => {
//   console.log("slide change");
// };
</script>

<style lang="scss"></style>
