<template>
  <v-dialog close-delay="3" v-model="isDialogShow" height="85vh" eager>
    <v-card>
      <v-carousel
        v-model="nowPage"
        height="85vh"
        show-arrows="hover"
        hide-delimiters
      >
        <v-carousel-item
          v-for="item in carouselImageItem"
          :key="item.imageIndex"
        >
          <v-img :src="item.imageSrc"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { toRef, computed } from "vue";

// Props
const props = defineProps<{
  carouselImageItem: any;
  selectedImageNumber: number;
  isDialog: boolean;
}>();

// emit
const emit = defineEmits<{
  (e: "clickCarouselController", val: number): void;
  (e: "outsideDialogClick", val: boolean): void;
}>();

// computed
const nowPage = computed({
  get: () => props.selectedImageNumber,
  set: (newNumber) => {
    emit("clickCarouselController", newNumber);
  },
});

const isDialogShow = computed({
  get: () => props.isDialog,
  set: (newDialogVal) => {
    emit("outsideDialogClick", newDialogVal);
  },
});
</script>
<style lang="scss" scoped>
// .v-dialog .v-overlay__content > .v-card {
//   background-color: w;
// }
</style>
