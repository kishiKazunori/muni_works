<template>
  <v-app-bar prominent>
    <v-app-bar-title class="app-bar-title">muni work u</v-app-bar-title>
    <template v-slot:append>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </template>
  </v-app-bar>
  <v-navigation-drawer app dark v-model="drawer" location="right">
    <v-list>
      <v-list-item
        v-for="link in linkContents"
        :key="link.title"
        :title="link.title"
        :to="link.value"
      ></v-list-item>
      <v-list-group value="ehon">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="絵本"></v-list-item>
        </template>
        <v-list-item
          v-for="ehonLink in ehonLinkItems"
          :key="ehonLink.title"
          :title="ehonLink.title"
          :to="ehonLink.value"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import TopPageMenuBar from "../components/TopPageMenuBar.vue";
interface LinkItems {
  title: string;
  value: string;
}
const linkContents: LinkItems[] = reactive([
  { title: "TOP", value: "/" },
  { title: "about", value: "/about" },
]);
const ehonLinkItems: LinkItems[] = [
  { title: "u", value: "/ehon/:u-page" },
  { title: "いし。", value: "/ehon/:isi-page" },
];
const drawer = ref(false);
</script>

<style lang="scss" scoped>
.nav-list-item-style {
  font-family: "Zen Old Mincho", sans-serif;
}
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
