<template>
  <header class="header">
    <app-navbar />
  </header>
  <section class="content">
    <router-view></router-view>
  </section>
</template>

<script setup>
import AppNavbar from '@components/app-navbar.vue';
</script>

<style scoped></style>
