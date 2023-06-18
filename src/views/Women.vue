<template>
  <section class="women page-spacing page-direction">
    <h1 class="page-title">{{ text.sections.women }}</h1>
    <Suspense>
      <app-collection :collection="{ type: 'women' }" />
    </Suspense>
  </section>
</template>

<script setup>
import text from '@static/text.js';
import AppCollection from '@components/app-collection.vue';
</script>
