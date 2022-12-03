<template>
    <AppBarMenu />
    <v-row>
        <v-col cols="4" class="d-flex child-flex" v-for="item in imageItems">
            <div @click="imageClickEvents" class="art-book-images">
                <v-img :src="item.imageSrc" width="30vw">
                </v-img>
            </div>
        </v-col>
    </v-row>

    <div v-show="isModalShow" class="modal-window">
        <v-overlay activator="parent" location-strategy="connected">
            <v-carousel style="margin-bottom: 1.4rem;" height="80vh" show-arrows="hover" hide-delimiters>
                <!-- <template v-slot:prev="{ props }">
                <v-btn variant="elevated" color="success" @click="props.onClick">
                    <v-icon icon="mdi-chevron-left" />
                </v-btn>
            </template>
            <template v-slot:next="{ props }">
                <v-btn variant="elevated" color="success" @click="props.onClick">
                    <v-icon icon="mdi-chevron-right" />
                </v-btn>
            </template> -->
                <v-carousel-item style="padding-bottom:10rem;" v-for="(item, i) in imageItems" :key="i"
                    :src="item.imageSrc">
                </v-carousel-item>
            </v-carousel>

        </v-overlay>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import AppBarMenu from "../components/AppBarMenu.vue"
import anime from 'animejs'
export default defineComponent({
    components: {
        AppBarMenu
    },
    setup() {
        const isModalShow = ref(false)
        const imageClickEvents = () => {
            console.log("EEEEEEEEE");

            isModalShow.value = !isModalShow.value
        }
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
                translateY: -15,
                delay: anime.stagger(200)
            });
        })
        return {
            isModalShow,
            imageItems,
            imageClickEvents,
        }
    }
});


</script>


<style  lang="scss" scoped>
.modal-window {
    position: absolute;
    left: 5vw;
    top: 1vh;
    height: 30vh;
    width: 90vw;
    padding-bottom: 1rem;
}
</style>