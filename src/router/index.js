import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

const Checkout = () => import('@/views/Checkout.vue');
const Collections = () => import('@/views/Collections.vue');
const Men = () => import('@/views/Men.vue');
const Women = () => import('@/views/Women.vue');
const Detail = () => import('@/views/Detail.vue');

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'checkout', path: '/checkout', component: Checkout },
  { name: 'collections', path: '/collections', component: Collections },
  {
    path: '/men',
    children: [
      { path: '', component: Men },
      { path: ':id', component: Detail, name: 'men' },
    ],
  },
  {
    path: '/women',
    children: [
      { path: '', component: Women },
      { path: ':id', component: Detail, name: 'women' },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;
