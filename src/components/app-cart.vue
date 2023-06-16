<template>
  <router-link class="cart" to="/checkout">
    <span class="counter" v-if="totalItems">{{ totalItems }}</span>
    <img
      class="shopping-cart"
      src="@assets/svg/icon-cart.svg"
      alt="shopping cart"
    />
  </router-link>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const totalItems = computed(() => store.getters.itemsCount);
</script>

<style scoped>
.cart {
  position: relative;
}

.cart > .counter {
  position: absolute;
  right: -0.7rem;
  top: -0.7rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 50%;
}
</style>
