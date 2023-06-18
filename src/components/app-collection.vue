<template>
  <section class="app-collection">
    <h2 class="title">{{ collection.title }}</h2>
    <div class="section" v-for="product of products" :key="product.id">
      <app-card :product="product" />
    </div>
  </section>
</template>

<script setup>
import productService from '@/services/product-service.js';
import AppCard from '@components/app-card.vue';

const props = defineProps({ collection: Object });
let products;

try {
  const { data } = await productService.getAllProductsByType(
    props.collection.type
  );

  products = data;
} catch (e) {
  console.log({ e });
}
</script>

<style scoped>
.app-collection {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.app-collection > .title {
  font-size: 1.125rem;
}
</style>
