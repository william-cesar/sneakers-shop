<template>
  <div class="cart-items">
    <div
      class="item-row align-flex-row"
      v-for="product of products"
      :key="product.id"
    >
      <img
        class="preview-img"
        :src="product.images.thumb[0]"
        alt="preview image"
      />
      <div class="info">
        <span class="name">{{ product.title }}</span>
        <span class="total">
          {{ product.quantity }} x {{ formattedPrice(product) }}
        </span>
      </div>
    </div>
    <div class="savings">
      {{ text.savings }} <span>{{ formattedSavings() }}</span>
    </div>
    <div class="total-items">
      {{ formattedTotal() }}
    </div>
    <router-link to="/checkout" class="checkout">
      <button class="checkout-btn action-btn" @click="emit('checkout')">
        {{ text.checkout }}
      </button>
    </router-link>
  </div>
</template>

<script setup>
import text from '@static/text.js';
import { computed } from 'vue';
import { useStore } from 'vuex';

const emit = defineEmits(['checkout']);
const store = useStore();
const products = computed(() => store.getters.allItems);
const totalPrice = computed(() => store.getters.totalPrice);
const totalOldPrice = computed(() => store.getters.totalOldPrice);

const formattedPrice = (item) => {
  return (Number(item.price) * Number(item.quantity)).toFixed(2);
};

const formattedSavings = () => {
  return `$${(totalOldPrice.value - totalPrice.value).toFixed(2)}`;
};

const formattedTotal = () => {
  return `${text.total} $${totalPrice.value.toFixed(2)}`;
};
</script>

<style scoped>
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--grayish-blue);
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px var(--grayish-blue);
  background-color: var(--white);
}

.cart-items > .item-row {
  gap: 2rem;
  border-bottom: 1px solid var(--grayish-blue);
  padding-bottom: 0.5rem;
}

.cart-items > .item-row > .preview-img {
  height: 2.5rem;
  width: 2.5rem;
}

.cart-items > .item-row > .info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-items > .item-row > .info > .name,
.cart-items > .item-row > .info > .total {
  font-weight: 700;
  font-size: 0.875rem;
}

.cart-items .info > .total {
  color: var(--orange);
}

.cart-items > .savings {
  margin-left: auto;
  color: var(--grayish-blue);
  font-size: 0.875rem;
}

.cart-items > .savings > span {
  text-decoration: line-through;
}

.cart-items > .total-items {
  margin-left: auto;
  font-weight: 700;
}

.cart-items > .checkout {
  width: 100%;
}
</style>
