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
    <!-- <v-img
      @click="imageSelectedAction(item.imageIndex)"
      :src="item.imageSrc"
      class="bg-grey-lighten-2 art-book-images"
      cover
    > 
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="grey-lighten-5">
        </v-progress-circular>
      </v-row>
    </template> -->
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
      return 5;
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
