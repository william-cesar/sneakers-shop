<template>
  <section class="home">
    <img class="title" src="@assets/svg/logo.svg" alt="Title - Sneakers" />
    <p class="description">{{ text.home.description }}</p>
  </section>
</template>

<script setup>
import text from '@static/text.js';
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 4rem;
}

.home > .title {
  height: 6rem;
}

.home > .description {
  font-size: 1.5rem;
  color: var(--dark-grayish-blue);
}
</style>
