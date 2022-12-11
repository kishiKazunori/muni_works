<template>
  <v-overlay v-model="isOverlayShow" class="d-flex align-center justify-center">
    <div class="mobile-image-slider">
      <!-- <v-btn @click="closeButtonClick">
        <v-icon class="image-close-icon"> mdi-close-circle-outline</v-icon>
      </v-btn> -->
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
    width: 60vw;
    height: 80%;
  }
}
// tablet
@media screen and (max-width: 767px) {
  .mobile-image-slider {
    width: 55vw;
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
