<template>
  <AppBarMenu />
  <v-main>
    <v-container fluid>
      <v-card class="mx-auto" max-width="500" variant="outlined">
        <v-img
          height="300"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          cover
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
            <div class="text-caption">テーマ：シュールレアリスム、自然、生き物、縄文土器。</div>
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
</template>

<script setup lang="ts">
import AppBarMenu from "../components/AppBarMenu.vue";
</script>

<style lang="scss" scoped></style>
