<template>
  <section class="collections">
    <h1 class="title">{{ text.sections.collections }}</h1>
    <div
      class="sections"
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

<style scoped>
.collections,
.collections > .sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.collections > .title {
  font-size: 1.5rem;
}
</style>
