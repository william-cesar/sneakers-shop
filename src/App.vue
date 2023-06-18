<template>
  <header class="header">
    <app-navbar />
  </header>
  <section class="content">
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </section>
</template>

<script setup>
import AppNavbar from '@components/app-navbar.vue';
</script>
