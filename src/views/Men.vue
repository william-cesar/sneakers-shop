<template>
  <section class="men page-spacing page-direction">
    <h1 class="page-title">{{ text.sections.men }}</h1>
    <Suspense>
      <app-collection :collection="{ type: 'men' }" />
    </Suspense>
  </section>
</template>

<script setup>
import text from '@static/text.js';
import AppCollection from '@components/app-collection.vue';
</script>
