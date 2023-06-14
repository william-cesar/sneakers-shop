import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

const Checkout = () => import('@/views/Checkout.vue');
const Collections = () => import('@/views/Collections.vue');
const Men = () => import('@/views/Men.vue');
const Women = () => import('@/views/Women.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/checkout', component: Checkout },
  { path: '/collections', component: Collections },
  { path: '/men', component: Men },
  { path: '/women', component: Women },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;
