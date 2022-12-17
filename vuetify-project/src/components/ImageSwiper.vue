<template>
  <swiper
    :slides-per-view="1"
    :space-between="15"
    :loop="true"
    :initialSlide="selectedImageNumber"
    :pagination="myPaginationStyle"
    :modules="modules"
    style="color: #fff"
  >
    <swiper-slide v-for="(item, i) in swiperImageItems" :key="i">
      <v-img :src="item.imageSrc">
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
import "swiper/css";
// import "swiper/css/pagination";

// Props
const props = defineProps<{
  swiperImageItems: any;
  selectedImageNumber: number;
}>();

// data
const myPaginationStyle = {
  clickable: true,
  PaginationOptions: { type: "fraction" },
  lazy: { loadPrevNext: true, loadPrevNextAmount: 2 },
};
const modules = [Pagination];

// methods
// const onSwiper = (swiper: any) => {
//   console.log(swiper.value);
// };
// const onSlideChange = () => {
//   console.log("slide change");
// };
</script>

<style lang="scss"></style>
