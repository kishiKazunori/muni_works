import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ArtBookPage from "../views/ArtBookPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'topPage',
    component: () => import('../views/TopPage.vue'),
  },
  {
    path: '/ehon/:name',
    name: 'ehon',
    component: () => ArtBookPage,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/MuniAbout.vue'),
  },
];

const router = createRouter({
  // Viteの環境変数でimport.meta.env.BASE_URL = vite.config.tsのbase
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;