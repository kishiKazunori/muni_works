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
import { computed, onUpdated, onMounted } from "vue";
import VLazyImage from "v-lazy-image";

// Props
const props = defineProps<{
  imageGridItems: any;
  ehonName: any;
}>();

const setColValue = computed({
  get: () => {
    if (props.ehonName === ":isi-page") {
      return 3;
    } else {
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

<style scoped>
.art-book-images {
  align-self: center;
  max-width: 450px;
  height: 100%;
  width: 100%;
}
.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>
