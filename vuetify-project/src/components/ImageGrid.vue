<template>
  <v-col cols="4" class="d-flex child-flex" v-for="item in imageGridItems" :key="item.imageIndex">
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
// Props
const props = defineProps<{
  imageGridItems: any;
}>();

const emit = defineEmits<{
  (e: "gridImageClick", val: number): void;
}>();
const imageSelectedAction = (selectedId: number) =>
  emit("gridImageClick", selectedId);
</script>
