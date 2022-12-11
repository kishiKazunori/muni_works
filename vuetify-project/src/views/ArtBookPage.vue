<template>
  <AppBarMenu />
  <v-main>
    <v-container fluid>
      <div class="d-flex justify-center">
        <v-row :dense="isRowDense">
          <ImageGrid
            v-model:imageGridItems="computePageItems"
            @gridImageClick="gridImageClick"
            :ehonName="nowEhonName"
          />
          <ImageDialogCarousel
            v-if="isPcView"
            :isDialog="isDialog"
            :carouselImageItem="computePageItems"
            :selectedImageNumber="selectedImageNumber"
            @outsideDialogClick="changeIsDialogValue"
            @clickCarouselController="changeSelectedImageNumber"
          />
          <ImageOverlay
            v-else
            :isOverlay="isOverlay"
            :swiperImageItems="computePageItems"
            :selectedImageNumber="selectedImageNumber"
            @changeIsOverlay="changeIsOverlayValue"
            @changeIsSwiperShow="closeOverlay"
          />
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { computed, reactive, ref, toRef, onMounted } from "vue";
import AppBarMenu from "../components/AppBarMenu.vue";
import ImageGrid from "../components/ImageGrid.vue";
import ImageDialogCarousel from "../components/ImageDialogCarousel.vue";
import ImageOverlay from "../components/ImageOverlay.vue";

const props = defineProps({
  name: String,
});

// data
const isOverlay = ref(false);
const windowSize = ref(window.innerWidth);
const selectedImageNumber = ref(0);
const isDialog = ref(false);
const nowEhonName = toRef(props, "name");
const imageItemPaths = reactive<object[]>([]);

// computed
const computePageItems = computed(() => {
  if (nowEhonName.value === ":u-page") {
    imageItemPaths.splice(0);
    createPageItemPaths("u-ehon-image", 24);
  } else if (nowEhonName.value === ":isi-page") {
    imageItemPaths.splice(0);
    createPageItemPaths("isi-ehon-image", 29);
  }
  return imageItemPaths;
});

const isRowDense = computed(() => {
  return windowSize.value <= 990;
});
const isPcView = computed(() => {
  return windowSize.value >= 990;
});

// methods
const createPageItemPaths = (ehonName: string, lastPageIndex: number) => {
  for (let i = 0; i < lastPageIndex + 1; i++) {
    // 値が 0 から 4 まで計 5 回実行される
    imageItemPaths.push({
      imageIndex: i,
      imageSrc: `../../${ehonName}/${i + 1}.jpg`,
    });
  }
};
const gridImageClick = (selectedId: number) => {
  selectedImageNumber.value = selectedId;
  if (isPcView.value) {
    isDialog.value = true;
  } else {
    isOverlay.value = true;
  }
};
const changeSelectedImageNumber = (newNumber: number) => {
  selectedImageNumber.value = newNumber;
};
const changeIsDialogValue = (newDialogVal: boolean) => {
  isDialog.value = newDialogVal;
};
const changeIsOverlayValue = (newVal: boolean) => {
  console.log(isOverlay.value);
  isOverlay.value = newVal;
};
const closeOverlay = () => {
  isOverlay.value = false;
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
// スマホ版の大きさを見る
// @media all and (min-width: 768px) and (max-width: 1024px) {
// }
// .mobile-image-slider {
//   width: 80vw;
// }
// @media (max-width: 767px) {
//   .mobile-image-slider {
//     width: 100vw;
//   }
// }
</style>
