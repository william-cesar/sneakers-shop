<template>
  <div class="app-input align-flex-row">
    <button
      class="minus-btn item center-flex-row"
      type="button"
      @click="decrement"
    >
      <img src="@assets/svg/icon-minus.svg" alt="minus" />
    </button>
    <input
      class="number item center-flex-row"
      type="number"
      min="0"
      step="1"
      v-model="counter"
      @input="(e) => (counter = e.target.value.replace(/^0+/, 0))"
      @blur="formatInput"
    />
    <button
      class="plus-btn item center-flex-row"
      type="button"
      @click="increment"
    >
      <img src="@assets/svg/icon-plus.svg" alt="plus" />
    </button>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import productService from '@/services/product-service.js';

const store = useStore();
const props = defineProps({ itemId: String, type: String });
const counter = ref(0);
const cartItemById = computed(() => store.getters.itemById(props.itemId));
const formatInput = () => (counter.value = parseInt(counter.value));
let product;

try {
  const { data } = await productService.getProductByTypeAndById(
    props.type,
    props.itemId
  );

  product = data;
} catch (e) {
  console.log({ e });
}

watchEffect(() => {
  if (counter.value < 0 || counter.value === '') {
    counter.value = 0;
  }

  if (counter.value > cartItemById.value?.inStock) {
    counter.value = cartItemById.value.inStock;
  }

  product = { ...product, quantity: parseInt(counter.value, 10) };
  store.dispatch('updateCart', product);
});

const increment = () => {
  if (!cartItemById.value || counter.value < cartItemById.value?.inStock) {
    counter.value++;
  }
};

const decrement = () => {
  if (counter.value > 0) {
    counter.value--;
  }
};
</script>

<style scoped>
.app-input {
  width: fit-content;
  filter: drop-shadow(0.25rem 0.25rem 0.25rem var(--grayish-blue));
}

.app-input > .item {
  width: 2.5rem;
  height: 100%;
  text-align: center;
  background-color: var(--light-grayish-blue);
  outline: none;
}

.app-input > .minus-btn {
  border-radius: 0.5rem 0 0 0.5rem;
}

.app-input > .plus-btn {
  border-radius: 0 0.5rem 0.5rem 0;
}

.app-input > .number {
  border: none;
  font-weight: 700;
}

.app-input > .number::-webkit-outer-spin-button,
.app-input > .number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
