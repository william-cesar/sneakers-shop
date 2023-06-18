<template>
  <section class="app-collection">
    <router-link v-if="collection.title" :to="collection.link">
      <h2 class="collection-title">{{ collection.title }}</h2>
    </router-link>
    <div class="section" v-for="product of products" :key="product.id">
      <app-card :product="product" :type="collection.type" />
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
  padding-top: 1rem;
}

.app-collection > a > .collection-title {
  font-size: 1.25rem;
}
</style>
