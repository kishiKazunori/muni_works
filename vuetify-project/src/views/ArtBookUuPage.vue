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

                    <v-dialog close-delay="3" v-model="dialog" width="65vw" height="90vh" style="aspect-ratio: 16 / 8;"
                        eager>
                        <v-card width="65vw" height="85vh" style="aspect-ratio: 16 / 8;">
                            <v-carousel width="65vw" height="90vh" style="aspect-ratio: 16 / 8;" show-arrows="hover"
                                hide-delimiters>
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
import { defineComponent, onMounted, ref } from "vue";
import AppBarMenu from "../components/AppBarMenu.vue";
import anime from 'animejs'
export default defineComponent({
    components: {
        AppBarMenu
    },
    setup() {
        const dialog = ref(false)
        // const imageClickEvents = (e: any): void => {
        //     dialog.value = true
        // }
        const imageItems = ref(
            [
                { "ImageIndex": 0, "imageSrc": "../../u-ehon-image/1.png" },
                { "ImageIndex": 1, "imageSrc": "../../u-ehon-image/2.png" },
                { "ImageIndex": 2, "imageSrc": "../../u-ehon-image/3.png" },
                { "ImageIndex": 3, "imageSrc": "../../u-ehon-image/4.png" },
                { "ImageIndex": 4, "imageSrc": "../../u-ehon-image/5.png" },
                { "ImageIndex": 5, "imageSrc": "../../u-ehon-image/6.png" },
                { "ImageIndex": 6, "imageSrc": "../../u-ehon-image/7.png" },
                { "ImageIndex": 7, "imageSrc": "../../u-ehon-image/8.png" },
                { "ImageIndex": 8, "imageSrc": "../../u-ehon-image/9.png" },
                { "ImageIndex": 9, "imageSrc": "../../u-ehon-image/10.png" },
                { "ImageIndex": 10, "imageSrc": "../../u-ehon-image/11.png" },
                { "ImageIndex": 11, "imageSrc": "../../u-ehon-image/12.png" },
                { "ImageIndex": 12, "imageSrc": "../../u-ehon-image/13.png" },
                { "ImageIndex": 13, "imageSrc": "../../u-ehon-image/14.png" },
                { "ImageIndex": 14, "imageSrc": "../../u-ehon-image/15.png" },
                { "ImageIndex": 15, "imageSrc": "../../u-ehon-image/16.png" },
                { "ImageIndex": 16, "imageSrc": "../../u-ehon-image/17.png" },
                { "ImageIndex": 17, "imageSrc": "../../u-ehon-image/18.png" },
                { "ImageIndex": 18, "imageSrc": "../../u-ehon-image/19.png" },
                { "ImageIndex": 19, "imageSrc": "../../u-ehon-image/20.png" },
                { "ImageIndex": 20, "imageSrc": "../../u-ehon-image/21.png" },
                { "ImageIndex": 21, "imageSrc": "../../u-ehon-image/22.png" },
                { "ImageIndex": 22, "imageSrc": "../../u-ehon-image/23.png" },
                { "ImageIndex": 23, "imageSrc": "../../u-ehon-image/24.png" },
                { "ImageIndex": 24, "imageSrc": "../../u-ehon-image/25.png" }
            ]
        )
        onMounted(() => {
            anime({
                targets: '.art-book-images',
                opacity: ['0%', '30%', '60%', '100%'],
                easing: 'easeInQuad',
                translateY: -5,
                delay: anime.stagger(200)
            });
        })
        return {
            imageItems,
            dialog,
            // imageClickEvents,
        }
    }
});


</script>


<style  lang="scss" scoped>
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
</style>