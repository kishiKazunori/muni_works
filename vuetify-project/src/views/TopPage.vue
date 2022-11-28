<template>
    <v-app class="container">
      <v-main>
        <HomeImg />
        <LogoText class="logo-text-position"/>
        <MenuBar />
      </v-main>
    </v-app>
  </template>
  
  <script setup lang="ts">
  import HomeImg from '../components/HomeImg.vue';
  import LogoText from '../components/LogoText.vue';
  import MenuBar from '../components/MenuBar.vue';
  </script>
  
  <style  lang="css" >

  .logo-text-position{
    position: absolute;
      top: 30vw;
      left: 10vh;
  }
  
  </style>