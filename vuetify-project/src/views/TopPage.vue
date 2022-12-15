<template>
  <v-app class="container">
    <v-main>
      <div class="top-page-fade-animation">
        <LogoText transition="scroll-x-transition" class="logo-text-position" />
        <HomeImg />
        <TopPageMenuBar />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HomeImg from "../components/HomeImg.vue";
import LogoText from "../components/LogoText.vue";
import TopPageMenuBar from "../components/TopPageMenuBar.vue";
import { onMounted } from "vue";
import anime from "animejs";
onMounted(() => {
  anime({
    targets: ".top-page-fade-animation",
    opacity: [0, 1],
    easing: "easeInOutCubic", // 加減速の種類
    duration: 900, // ミリ秒指定
  });
});
</script>

<style lang="scss">
.logo-text-position {
  position: absolute;
  top: 30vw;
  left: 10vh;
}
</style>
