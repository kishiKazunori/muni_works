<template>
  <v-overlay v-model="isOverlayShow" class="d-flex align-center justify-center">
    <v-row no-gutters>
      <v-col>
        <div :class="swiperClass">
          <ImageSwiper
            :swiperImageItems="swiperImageItems"
            :selectedImageNumber="selectedImageNumber"
            :windowSize="windowSize"
          />
        </div>
      </v-col>
      <v-col>
        <v-btn @click="closeButtonClick" class="close-button" variant="text">
          <v-icon icon="mdi-close" color="white" size="x-large"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
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
  nowEhonName: any;
}>();
const emit = defineEmits<{
  (e: "changeIsOverlay", val: boolean): void;
}>();

const swiperClass = computed(() => {
  if (props.nowEhonName === "u-page") {
    return "u-ehon-style";
  } else if (props.nowEhonName === "isi-page") {
    return "isi-ehon-style";
  }
});

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
@media screen and (min-width: 769px) and (max-width: 979px) {
  .u-ehon-style {
    width: 80vw;
    margin-left: 1rem;
  }
  .isi-ehon-style {
    width: 80vw;
    margin-left: 1rem;
  }
  .close-button {
    max-width: 20px;
  }
}
// tablet
@media screen and (min-width: 480px) and (max-width: 768px) {
  .u-ehon-style {
    width: 100vw;
  }
  .isi-ehon-style {
    width: 100vw;
  }
  .close-button {
    width: 100vw;
  }
}
// 横向きmobile
@media (orientation: landscape) and (max-width: 767px) {
  .u-ehon-style {
    width: 65vw;
    margin-left: 1rem;
  }
  .isi-ehon-style {
    width: 48vw;
    margin-left: 1rem;
  }
  .close-button {
    max-width: 20px;
  }
}
// mobile
@media screen and (max-width: 479px) {
  .u-ehon-style {
    width: 100vw;
  }
  .isi-ehon-style {
    width: 100vw;
  }
  .close-button {
    width: 100%;
  }
}
</style>
