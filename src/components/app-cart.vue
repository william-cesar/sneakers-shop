<template>
  <div class="cart">
    <span class="counter center-flex-row" v-if="totalItems">{{
      totalItems
    }}</span>
    <img
      class="shopping-cart"
      src="@assets/svg/icon-cart.svg"
      alt="shopping cart"
      @mouseover="togglePreview"
      @click="togglePreview"
    />
  </div>
  <OverlayPanel ref="preview">
    <app-cart-items @checkout="togglePreview" />
  </OverlayPanel>
</template>

<script setup>
import OverlayPanel from 'primevue/overlaypanel';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import AppCartItems from '@components/app-cart-items.vue';

const store = useStore();
const totalItems = computed(() => store.getters.itemsCount);
const preview = ref();

const togglePreview = (event) => {
  if (totalItems.value) {
    preview.value.toggle(event);
  }
};
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
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 50%;
}
</style>
