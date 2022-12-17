<template>
  <v-overlay v-model="isOverlayShow" class="d-flex align-center justify-center">
    <div class="mobile-image-slider">
      <ImageSwiper
        :swiperImageItems="swiperImageItems"
        :selectedImageNumber="selectedImageNumber"
        :windowSize="windowSize"
      />
    </div>
    <v-btn @click="closeButtonClick" class="close-button" variant="text">
      <v-icon icon="mdi-close" color="white" size="x-large"></v-icon>
    </v-btn>
  </v-overlay>
</template>

<script setup lang="ts">
import { toRef, computed } from "vue";
import ImageSwiper from "../components/ImageSwiper.vue";

// Props
const props = defineProps<{
  isOverlay: boolean;
  swiperImageItems: any;
  selectedImageNumber: number;
  windowSize: number;
}>();
const emit = defineEmits<{
  (e: "changeIsOverlay", val: boolean): void;
}>();

const isOverlayShow = computed({
  get: () => props.isOverlay,
  set: (newOverlayVal: boolean) => {
    emit("changeIsOverlay", newOverlayVal);
  },
});
const closeButtonClick = () => {
  isOverlayShow.value = false;
};
</script>
<style lang="scss" scoped>
.close-button {
  width: 100%;
}
// .prev-button{
//     background-color:rgba(0,0,0,0);
//     border: none !important;
//     height: 100%;
//     width: 50%;
//     position: absolute;
//     left: 0;
//     top: 0;
// }
// .next-button{
//     background-color:rgba(0,0,0,0);
//     border: none !important;
//     height: 100%;
//     width: 50%;
//     position: absolute;
//     right: 0;
//     top: 0;
// }

// // tablet => PC
@media screen and (max-width: 979px) {
  .mobile-image-slider {
    width: 86vw;
    height: 80%;
  }
}
// mobile => tablet
@media screen and (max-width: 767px) {
  .mobile-image-slider {
    width: 65vw;
    height: 80%;
  }
}
// mobile
@media screen and (max-width: 479px) {
  .mobile-image-slider {
    width: 100vw;
    height: auto;
  }
}
.image-close-icon {
  position: absolute;
  right: 0px;
  top: -30px;
  z-index: 99;
}
</style>
