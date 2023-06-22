import { createApp } from 'vue';
import './style.css';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import store from '@/store/index';
import router from '@/router';

createApp(App).use(store).use(router).use(PrimeVue).mount('#app');
