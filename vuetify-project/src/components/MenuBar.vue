<template>
  <v-tabs v-model="selectedTab" grow>
    <v-tab
      :to="item.value"
      class="menu-tab"
      v-for="item in tabLinkItems"
      :key="item.name"
      :value="item"
    >
      {{ item.name }}
    </v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const selectedTab = ref("いし。");
const tabLinkItems: any = reactive([
  {
    value: "/isiPage",
    name: "いし。",
  },
  {
    value: "/uPage",
    name: "u",
  },
  {
    value: "/aboutPage",
    name: "about",
  },
]);
</script>

<style lang="scss" scoped>
.menu-tab {
  font-size: 2em;
  font-family: "Zen Old Mincho", sans-serif;
  text-transform: none;
}
</style>
