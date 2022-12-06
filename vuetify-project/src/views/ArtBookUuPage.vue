<template>
    <AppBarMenu />
    <v-main>
        <v-container fluid>
            <div class="d-flex justify-center">
                <v-row>
                    <v-col cols="4" class="d-flex child-flex" v-for="item in imageItems">
                        <v-img @click="dialog = true" :src="item.imageSrc" class="bg-grey-lighten-2 art-book-images"
                            cover>
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey-lighten-5">
                                    </v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>

          <v-dialog
            v-if="isPcView"
            close-delay="3"
            v-model="dialog"
            width="65vw"
            height="90vh"
            style="aspect-ratio: 16 / 8"
            eager
          >
            <v-card height="85vh" style="aspect-ratio: 16 / 8">
              <v-carousel height="90vh" show-arrows="hover" hide-delimiters>
                                <v-carousel-item v-for="(item, i) in imageItems" :key="i">
                                    <v-img :src="item.imageSrc"></v-img>
                                </v-carousel-item>
                            </v-carousel>
                        </v-card>
                    </v-dialog>
                </v-row>


            </div>
        </v-container>
    </v-main>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import AppBarMenu from "../components/AppBarMenu.vue";
import ImageSwiper from "../components/ImageSwiper.vue";
import anime from "animejs";
export default defineComponent({
    components: {
        AppBarMenu
    },
    setup() {
    const dialog = ref(false);
    const overlay = ref(false);
    const windowSize = ref(window.innerWidth);
    const isPcView = computed(() => {
      return windowSize.value >= 990;
    });

    const gridImgClick = () => {
      if (isPcView.value) {
        dialog.value = !dialog.value;
      } else {
        overlay.value = true;
      }
    };

    const overlayHide = () => {
      overlay.value = false;
      console.log(overlay.value);
    };

    const imageItems = ref([
      { ImageIndex: 0, imageSrc: "../../u-ehon-image/1.jpg" },
      { ImageIndex: 1, imageSrc: "../../u-ehon-image/2.jpg" },
      { ImageIndex: 2, imageSrc: "../../u-ehon-image/3.jpg" },
      { ImageIndex: 3, imageSrc: "../../u-ehon-image/4.jpg" },
      { ImageIndex: 4, imageSrc: "../../u-ehon-image/5.jpg" },
      { ImageIndex: 5, imageSrc: "../../u-ehon-image/6.jpg" },
      { ImageIndex: 6, imageSrc: "../../u-ehon-image/7.jpg" },
      { ImageIndex: 7, imageSrc: "../../u-ehon-image/8.jpg" },
      { ImageIndex: 8, imageSrc: "../../u-ehon-image/9.jpg" },
      { ImageIndex: 9, imageSrc: "../../u-ehon-image/10.jpg" },
      { ImageIndex: 10, imageSrc: "../../u-ehon-image/11.jpg" },
      { ImageIndex: 11, imageSrc: "../../u-ehon-image/12.jpg" },
      { ImageIndex: 12, imageSrc: "../../u-ehon-image/13.jpg" },
      { ImageIndex: 13, imageSrc: "../../u-ehon-image/14.jpg" },
      { ImageIndex: 14, imageSrc: "../../u-ehon-image/15.jpg" },
      { ImageIndex: 15, imageSrc: "../../u-ehon-image/16.jpg" },
      { ImageIndex: 16, imageSrc: "../../u-ehon-image/17.jpg" },
      { ImageIndex: 17, imageSrc: "../../u-ehon-image/18.jpg" },
      { ImageIndex: 18, imageSrc: "../../u-ehon-image/19.jpg" },
      { ImageIndex: 19, imageSrc: "../../u-ehon-image/20.jpg" },
      { ImageIndex: 20, imageSrc: "../../u-ehon-image/21.jpg" },
      { ImageIndex: 21, imageSrc: "../../u-ehon-image/22.jpg" },
      { ImageIndex: 22, imageSrc: "../../u-ehon-image/23.jpg" },
      { ImageIndex: 23, imageSrc: "../../u-ehon-image/24.jpg" },
      { ImageIndex: 24, imageSrc: "../../u-ehon-image/25.jpg" },
    ]);
        onMounted(() => {
            anime({
        targets: ".art-book-images",
        opacity: ["0%", "30%", "60%", "100%"],
        easing: "easeInQuad",
                translateY: -5,
        delay: anime.stagger(200),
            });
    });
        return {
            imageItems,
            dialog,
      isPcView,
      overlay,
      gridImgClick,
      overlayHide,
            // imageClickEvents,
    };
  },
});
</script>

<style lang="scss" scoped>
// .prev-button{
//     background-color:rgba(0,0,0,0);
//     border: none !important;
//     height: 100%;
//     width: 50%;
//     position: absolute;
//     left: 0;
//     top: 0;
// }
// .next-button{
//     background-color:rgba(0,0,0,0);
//     border: none !important;
//     height: 100%;
//     width: 50%;
//     position: absolute;
//     right: 0;
//     top: 0;
// }
// スマホ版の大きさを見る

.mobile-image-slider {
}

// @media (max-width: 767px) {

// }
</style>
