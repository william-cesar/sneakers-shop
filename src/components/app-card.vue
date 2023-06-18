<template>
  <section class="card">
    <img :src="product.images.large[0]" alt="Sneaker preview" />
    <h3 class="title">{{ product.title }}</h3>
    <span class="price"> ${{ product.price.toFixed(2) }} </span>
    <div class="discount-section" v-if="product.oldPrice">
      <span class="old-price"> ${{ product.oldPrice.toFixed(2) }} </span>
      <span class="discount"> -{{ product.discount }}% </span>
    </div>
    <button class="see-more">{{ text.seeMore }}</button>
  </section>
</template>

<script setup>
import text from '@static/text.js';

const props = defineProps({ product: Object });
</script>

<style scoped></style>
