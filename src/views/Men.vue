<template>
  <app-input :addedItems="32" @value-change="valueChange" />
</template>

<script setup>
import AppInput from '@components/app-input.vue';

const valueChange = (e) => {
  console.log(e);
};
</script>

<style scoped></style>
