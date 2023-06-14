<template>
  <header class="header">
    <navbar />
  </header>
  <section class="content">
    <router-view></router-view>
  </section>
</template>

<script setup>
import Navbar from '@components/navbar.vue';
</script>

<style scoped></style>
