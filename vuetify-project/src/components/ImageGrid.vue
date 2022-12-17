<template>
  <v-col
    :cols="setColValue"
    v-for="item in imageGridItems"
    :key="item.imageSrc"
    justify="center"
    align="center"
  >
    <v-lazy-image
      justify="center"
      :src="item.imageSrc"
      class="art-book-images"
      @click="imageSelectedAction(item.imageIndex)"
    ></v-lazy-image>
  </v-col>
</template>
<script setup lang="ts">
import { computed, ref, onUpdated, onMounted, onActivated } from "vue";
import VLazyImage from "v-lazy-image";

// Props
const props = defineProps<{
  imageGridItems: any;
  ehonName: any;
  isPcView: boolean;
}>();
const setColValue = computed({
  get: () => {
    if (props.ehonName === "isi-page" && props.isPcView === true) {
      return 3;
    } else if (props.ehonName === "isi-page" && props.isPcView === false) {
      return 4;
    } else if (props.ehonName === "u-page" && props.isPcView === true) {
      return 4;
    } else if (props.ehonName === "u-page" && props.isPcView === false) {
      return 6;
    }
  },
  set: (newNumber) => {},
});
const emit = defineEmits<{
  (e: "gridImageClick", val: number): void;
}>();
const imageSelectedAction = (selectedId: number) =>
  emit("gridImageClick", selectedId);
</script>

<style lang="scss" scoped>
.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-loaded {
  opacity: 1;
}

// PC
@media all and (max-width: 2000px) {
  .art-book-images {
    align-self: center;
    height: 100%;
    width: 100%;
  }
}
// tablet
@media screen and (max-width: 767px) {
  .art-book-images {
    align-self: center;
    height: 100%;
    width: 100%;
  }
}
// mobile
@media screen and (max-width: 479px) {
  .art-book-images {
    align-self: center;
    height: 100%;
    width: 100%;
  }
}
</style>
