<template>
  <AppBarMenu />
  <div class="about-page-fade">
    <v-main>
      <v-container fluid>
        <v-card class="mx-auto" max-width="500" variant="outlined">
          <v-img
            src="./main-image/aboutImage.webp"
            class="text-white"
          ></v-img>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">about</div>
              <div class="text-h6 mb-1">muni</div>
              <div class="text-caption">
                絵本作家。 <br />
                28歳、栃木市出身、東京都在住
              </div>
              <div class="text-caption">
                テーマ：自然、生き物、縄文土器、言語、遊び。
              </div>
            </div>
          </v-card-item>

          <v-card-actions variant="outlined" class="card-actions">
            <v-spacer></v-spacer>
            <v-btn
              target="_blank"
              href="https://twitter.com/MusubiMuni"
              variant="outlined"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </div>
  <PageFooter />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AppBarMenu from "../components/AppBarMenu.vue";
import PageFooter from "../components/PageFooter.vue";
import anime from "animejs";
onMounted(() => {
  anime({
    targets: ".about-page-fade",
    opacity: [0, 1],
    easing: 'easeInOutCubic', // 加減速の種類
    duration: 900, // ミリ秒指定
  });
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  will-change: opacity;
  transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
