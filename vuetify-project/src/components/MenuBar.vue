<template>
    <v-tabs v-model="tab" color="basil" grow>
        <v-tab :to="item.value" class="menu-tab" v-for="item in items" :key="item" :value="item">
            {{ item.name }}
        </v-tab>
    </v-tabs>
</template>
 
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "MenuBar",
    setup() {
        const tab = ref("いし。");
        const items = ref([
                {
                    value: "/isiPage",
                    name: "いし。"
                },{
                    value: "/uPage",
                    name: "u"
                },
                {
                    value: "/aboutPage",
                    name: "about"
                },
            ]);
        return {
            tab,
            items
        };
    }
})
</script>
 
 
<style  lang="scss" scoped>
.menu-tab {
    font-size: 2em;
    font-family: 'Zen Old Mincho', sans-serif;
    text-transform: none;
}
</style>