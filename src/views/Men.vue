<template>
  <Suspense>
    <app-input-product :itemId="id" :type="name" />
  </Suspense>
</template>

<script setup>
import AppInputProduct from '@components/app-input-product.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { params, name } = route;
const { id } = params;
</script>

<style scoped></style>
