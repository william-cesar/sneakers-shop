<template>
  <section class="collections page-spacing page-direction">
    <h1 class="page-title">{{ text.sections.collections }}</h1>
    <div
      class="sections page-direction"
      v-for="collection of collectionTypes"
      :key="collection.type"
    >
      <Suspense>
        <app-collection :collection="collection" />
      </Suspense>
    </div>
  </section>
</template>

<script setup>
import text from '@static/text.js';
import collectionTypes from '@static/collection-types.js';
import AppCollection from '@components/app-collection.vue';
</script>
