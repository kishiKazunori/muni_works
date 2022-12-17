<template>
  <v-dialog
    close-delay="3"
    v-model="isDialogShow"
    height="auto"
    max-width="1000"
    eager
    transition="dialog-fade-transition"
    class="d-flax"
  >
    <v-btn @click="closeDialog" width="100" max-width="110" class="float-right"
      >Close</v-btn
    >
    <v-carousel
      v-model="nowPage"
      height="750"
      max-width="800"
      show-arrows="hover"
      hide-delimiters
    >
      <v-carousel-item v-for="item in carouselImageItem" :key="item.imageIndex">
        <v-img :src="item.imageSrc" height="750">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                indeterminate
                color="grey-lighten-4"
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-carousel-item>
    </v-carousel>
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

const closeDialog = () => {
  isDialogShow.value = false;
};
</script>
<style lang="scss" scoped>
// .v-dialog .v-overlay__content > .v-card {
//   background-color: w;
// }
</style>
