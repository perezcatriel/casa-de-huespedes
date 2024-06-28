import { createRouter, createWebHistory } from 'vue-router';
import CxHome from '@/views/CxHome.vue';

const routes = [
  {
    path: '/',
    name: 'CxHome',
    component: CxHome
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
