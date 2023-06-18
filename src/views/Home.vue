<template>
  <section class="home center-flex-column">
    <img
      class="sneakers"
      src="@root/fashion-sneakers.png"
      alt="Fashion Sneakers - background"
    />
    <img class="title" src="@assets/svg/logo.svg" alt="Title - Sneakers" />
    <p class="description">{{ text.home.description }}</p>
  </section>
</template>

<script setup>
import text from '@static/text.js';
</script>

<style scoped>
.home {
  height: 100%;
  gap: 4rem;
  position: relative;
}

.home > .sneakers {
  z-index: -1;
  position: absolute;
  transform: translateY(-8rem);
  opacity: 0.75;
  animation: drop 1.5s;
}

.home > .title {
  height: 6rem;
}

.home > .description {
  font-size: 1.5rem;
  color: var(--dark-grayish-blue);
  animation: fadeIn 1.5s;
}

@keyframes drop {
  from {
    transform: translateY(-12.5rem);
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    transform: translateY(-2rem);
    opacity: 0;
  }
}
</style>
