import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'topPage',
        component: () => import('../views/TopPage.vue'),
    },
      {
        path: '/isiPage',
        name: 'isiPage',
        component: () => import('../views/ArtBookIsiPage.vue'),
      },
];

const router = createRouter({
    // Viteの環境変数でimport.meta.env.BASE_URL = vite.config.tsのbase
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;