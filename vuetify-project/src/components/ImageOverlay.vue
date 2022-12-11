<template>
  <v-overlay
    v-model="isOverlayShow"
    class="d-flex align-center justify-center"
  >
    <div class="mobile-image-slider">
      <ImageSwiper
        :swiperImageItems="swiperImageItems"
        :selectedImageNumber="selectedImageNumber"
      />
    </div>
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
</script>
<style lang="scss" scoped>
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

// PC
@media screen and (max-width: 979px) {
  .mobile-image-slider {
    width: 80vw;
    height: 100vh;
  }
}
// tablet
@media screen and (max-width: 767px) {
  .mobile-image-slider {
    width: 80vw;
    height: auto;
  }
}
// mobile
@media screen and (max-width: 479px) {
  .mobile-image-slider {
    width: 100vw;
    height: auto;
  }
}
</style>
