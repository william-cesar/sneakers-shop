<template>
  <div class="product">
    <h3 class="company">{{ product.brand }}</h3>
    <span class="name">{{ product.title }}</span>
    <span class="description">{{ product.description }}</span>
    <div class="price-section">
      <span class="price"> ${{ product.price.toFixed(2) }} </span>
      <span class="discount-tag" v-if="product.discount">
        -{{ product.discount }}%
      </span>
      <span class="old-price" v-if="product.oldPrice">
        ${{ product.oldPrice.toFixed(2) }}
      </span>
    </div>
    <div class="checkout-section">
      <app-input-product :itemId="product.id" :type="type" />
      <app-keep-shopping />
    </div>
  </div>
</template>

<script setup>
import AppInputProduct from '@components/app-input-product.vue';
import AppKeepShopping from '@components/app-keep-shopping.vue';

const props = defineProps({ product: Object, type: String });
</script>

<style scoped>
.product {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
}

.product > .company {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--orange);
}

.product > .name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product > .description {
  font-size: 0.875rem;
  color: var(--dark-grayish-blue);
  padding-block: 1rem;
}

.product > .price-section {
  display: grid;
  grid-template-columns: fit-content(0px) fit-content(0px);
  grid-template-rows: auto auto;
  gap: 0.5rem;
}

.product > .price-section > .price {
  font-weight: 700;
  font-size: 1.125rem;
}

.product > .price-section > .old-price {
  font-size: 0.75rem;
  color: var(--dark-grayish-blue);
  text-decoration: line-through;
}

.product > .checkout-section {
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: flex-start;
}
</style>
