import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

const Checkout = () => import('@/views/Checkout.vue');
const Collections = () => import('@/views/Collections.vue');
const Men = () => import('@/views/Men.vue');
const Women = () => import('@/views/Women.vue');

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'checkout', path: '/checkout', component: Checkout },
  { name: 'collections', path: '/collections', component: Collections },
  { name: 'men', path: '/men/:id', component: Men },
  { name: 'women', path: '/women', component: Women },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;
