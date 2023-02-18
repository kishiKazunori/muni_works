<template>
  <v-tabs text-h1 height="10vh" v-model="selectedTab" grow class="tabs-style">
    <v-btn
      class="align-self-center"
      width="50vw"
      variant="text"
      :to="tabLinkItems[0].value"
    >
      {{ tabLinkItems[0].name }}
    </v-btn>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          class="align-self-center"
          height="99%"
          width="50vw"
          v-bind="props"
          variant="text"
        >
          絵本
          <v-icon end>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list class="bg-grey-lighten-3">
        <v-list-item
          class="menu-list-item-style"
          :to="item.value"
          v-for="item in menuItems"
          :key="item"
        >
          {{ item.name }}
        </v-list-item>
      </v-list>
    </v-menu>
  </v-tabs>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const selectedTab = ref("about");
const tabLinkItems: any = reactive([
  {
    value: "/about",
    name: "about",
  },
]);
const menuItems: any = reactive([
  {
    value: "/ehon/isi-page",
    name: "「いし。」",
  },
  {
    value: "/ehon/u-page",
    name: "「u」",
  },
]);
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .tabs-style {
    font-family: "Zen Old Mincho", sans-serif;
    ::v-deep .v-btn__content {
      font-size: 1.5rem;
    }
  }
  .menu-list-item-style {
    font-family: "Zen Old Mincho", sans-serif;
    font-size: 1.5rem;
  }
}
// タブレット以下
@media screen and (max-width: 959px) {
  .tabs-style {
    font-family: "Zen Old Mincho", sans-serif;
  }
  .menu-list-item-style {
    font-family: "Zen Old Mincho", sans-serif;
  }
}
</style>
