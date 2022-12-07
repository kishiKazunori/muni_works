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

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "AppBarMenu",
  setup() {
    const contents = ref([
      { name: "TOP", value: "/" },
      { name: "いし。", value: "/isiPage" },
      { name: "u", value: "/uPage" },
      { name: "about", value: "/about" },
    ]);
    return {
      contents,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-bar-button {
  font-size: 1.5em;
  font-family: "Zen Old Mincho", sans-serif;
}

.app-bar-title-button {
  font-size: 2em;
}

@media screen and (max-width: 767px) {
  .app-bar-button {
    font-size: 0.7em;
  }

  .app-bar-title-button {
    font-size: 0.7em;
  }
}
</style>
