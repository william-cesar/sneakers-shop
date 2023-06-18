<template>
  <section class="detail page-spacing center-flex-row">
    <app-preview :photos="product.images" />
    <app-product :product="product" :type="name" />
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import AppPreview from '@components/app-preview.vue';
import AppProduct from '@components/app-product.vue';
import productService from '@/services/product-service.js';

const route = useRoute();
const {
  name,
  params: { id },
} = route;
let product;

try {
  const { data } = await productService.getProductByTypeAndById(name, id);

  product = data;
} catch (e) {
  console.log({ e });
}
</script>

<style scoped>
.detail {
  height: 100%;
  gap: 6rem;
}
</style>
