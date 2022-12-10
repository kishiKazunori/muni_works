<template>
    <v-app class="container">
      <v-main>
        <HomeImg />
        <LogoText class="logo-text-position"/>
        <TopPageMenuBar />
      </v-main>
    </v-app>
  </template>
  
  <script setup lang="ts">
  import HomeImg from '../components/HomeImg.vue';
  import LogoText from '../components/LogoText.vue';
  import TopPageMenuBar from '../components/TopPageMenuBar.vue';
  </script>
  
  <style  lang="css" >

  .logo-text-position{
    position: absolute;
      top: 30vw;
      left: 10vh;
  }
  
  </style>