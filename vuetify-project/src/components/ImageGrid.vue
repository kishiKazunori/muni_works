<template>
  <v-progress-circular
    v-if="changeView"
    indeterminate
    model-value="20"
    :size="93"
    :width="7"
  ></v-progress-circular>
  <v-col
    v-else
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
}>();
const changeView = ref(true);
const setColValue = computed({
  get: () => {
    if (props.ehonName === "isi-page") {
      return 4;
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

onMounted(() => {
  changeView.value = false;
});
</script>

<style scoped>
.art-book-images {
  align-self: center;
  max-width: 450px;
  height: 100%;
  width: 100%;
}
.art-book-images::placeholder {
  border: solid;
}
.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-load {
  border: 1px solid;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>
