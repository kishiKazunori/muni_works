<template>
  <AppBarMenu />
  <v-main>
    <v-container fluid>
      <div class="d-flex justify-center">
        <v-row>
          <ImageGrid
            v-model:imageGridItems="computePageItems"
            @gridImageClick="gridImageClick"
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
          />
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { computed, reactive, onMounted, ref } from "vue";
import AppBarMenu from "../components/AppBarMenu.vue";
import ImageGrid from "../components/ImageGrid.vue";
import ImageDialogCarousel from "../components/ImageDialogCarousel.vue";
import ImageOverlay from "../components/ImageOverlay.vue";
import anime from "animejs";
import { useRoute } from "vue-router";
onMounted(() => {
  anime({
    targets: ".art-book-images",
    opacity: ["0%", "30%", "60%", "100%"],
    easing: "easeInQuad",
    translateY: -5,
    delay: anime.stagger(200),
  });
});
// data
const isOverlay = ref(false);
const windowSize = ref(window.innerWidth);
const selectedImageNumber = ref(0);
const isDialog = ref(false);
const route = useRoute();
const ehonName = ref(route.params.name);
const imageItemPaths = reactive<object[]>([]);

const computePageItems = computed(() => {
  if (ehonName.value === ":u-page") {
    createPageItemPaths("u-ehon-image", 24);
  } else if (ehonName.value === ":isi-page") {
    createPageItemPaths("isi-ehon-image", 29);
  }
  return imageItemPaths
});

const createPageItemPaths = (ehonName: string, lastPageIndex: number) => {
  for (let i = 0; i < lastPageIndex; i++) {
    // 値が 0 から 4 まで計 5 回実行される
    imageItemPaths.push({
      imageIndex: i,
      imageSrc: `../../${ehonName}/${i + 1}.jpg`,
    });
  }
};
const imageItems = ref([
  { imageIndex: 0, imageSrc: "../../u-ehon-image/1.jpg" },
  { imageIndex: 1, imageSrc: "../../u-ehon-image/2.jpg" },
  { imageIndex: 2, imageSrc: "../../u-ehon-image/3.jpg" },
  { imageIndex: 3, imageSrc: "../../u-ehon-image/4.jpg" },
  { imageIndex: 4, imageSrc: "../../u-ehon-image/5.jpg" },
  { imageIndex: 5, imageSrc: "../../u-ehon-image/6.jpg" },
  { imageIndex: 6, imageSrc: "../../u-ehon-image/7.jpg" },
  { imageIndex: 7, imageSrc: "../../u-ehon-image/8.jpg" },
  { imageIndex: 8, imageSrc: "../../u-ehon-image/9.jpg" },
  { imageIndex: 9, imageSrc: "../../u-ehon-image/10.jpg" },
  { imageIndex: 10, imageSrc: "../../u-ehon-image/11.jpg" },
  { imageIndex: 11, imageSrc: "../../u-ehon-image/12.jpg" },
  { imageIndex: 12, imageSrc: "../../u-ehon-image/13.jpg" },
  { imageIndex: 13, imageSrc: "../../u-ehon-image/14.jpg" },
  { imageIndex: 14, imageSrc: "../../u-ehon-image/15.jpg" },
  { imageIndex: 15, imageSrc: "../../u-ehon-image/16.jpg" },
  { imageIndex: 16, imageSrc: "../../u-ehon-image/17.jpg" },
  { imageIndex: 17, imageSrc: "../../u-ehon-image/18.jpg" },
  { imageIndex: 18, imageSrc: "../../u-ehon-image/19.jpg" },
  { imageIndex: 19, imageSrc: "../../u-ehon-image/20.jpg" },
  { imageIndex: 20, imageSrc: "../../u-ehon-image/21.jpg" },
  { imageIndex: 21, imageSrc: "../../u-ehon-image/22.jpg" },
  { imageIndex: 22, imageSrc: "../../u-ehon-image/23.jpg" },
  { imageIndex: 23, imageSrc: "../../u-ehon-image/24.jpg" },
  { imageIndex: 24, imageSrc: "../../u-ehon-image/25.jpg" },
]);

// computed
const isPcView = computed(() => {
  return windowSize.value >= 990;
});

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
  isOverlay.value = newVal;
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
