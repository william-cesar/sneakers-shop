import { createStore } from 'vuex';
import { useCartStore } from './cart';

const store = createStore({
  modules: {
    cart: useCartStore,
  },
});

export default store;
