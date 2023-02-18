<template>
    <v-container fluid fill-height class="home-image">
    </v-container>
</template>

<script setup lang="ts">
    //
</script>


<style  lang="scss" scoped>
.home-image {
    background: url("/main-image/topImage.webp");
    background-size: cover;
    background-position: center center;
    animation-duration: 1s;
    width: 100vw;
    height: 75vh;
    animation-name: animation;
}

@keyframes animation{
  /*1秒かけてwidth: 50%;→width: 100%;になる動きを記述*/
  0%{
    height: 55vh;
  }
  100%{
    height: 75vh;
  }
}
</style>