<template>
  <v-col
    :cols="setColValue"
    class="d-flex child-flex"
    v-for="item in imageGridItems"
    :key="item.imageSrc"
  >
    <v-img
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
      </template>
    </v-img>
  </v-col>
</template>
<script setup lang="ts">
import { computed, onUpdated } from "vue";
import anime from "animejs";

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
      return 4;
    }
  },
  set: (newNumber) => {},
});

const emit = defineEmits<{
  (e: "gridImageClick", val: number): void;
}>();
const imageSelectedAction = (selectedId: number) =>
  emit("gridImageClick", selectedId);

onUpdated(() => {
  anime({
    targets: ".art-book-images",
    opacity: ["0%", "30%", "60%", "100%"],
    easing: "easeInQuad",
    translateY: -5,
    delay: anime.stagger(200),
  });
});
</script>
