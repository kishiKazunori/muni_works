<template>
  <v-app-bar prominent>
    <v-app-bar-title class="app-bar-title">muni work u</v-app-bar-title>
    <v-btn
      class="app-bar-links"
      :to="content.value"
      v-for="content in linkContents"
      :key="content.value"
    >
      <span>{{ content.name }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const linkContents: any = reactive([
  { name: "TOP", value: "/" },
  { name: "いし。", value: "/isiPage" },
  { name: "u", value: "/uPage" },
  { name: "about", value: "/about" },
]);
</script>

<style lang="scss" scoped>
.v-toolbar-title__placeholder {
  overflow: initial !important;
}
.app-bar-links {
  font-size: 1em;
  font-family: "Zen Old Mincho", sans-serif;
}

@media screen and (max-width: 767px) {
  .app-bar-title {
    font-size: 0.5em;
    width: 50vw !important;
  }
  .app-bar-links {
    font-size: 1px;
    margin: 0 !important;
    padding: 0;
    font-family: "Zen Old Mincho", sans-serif;
  }
}
</style>
