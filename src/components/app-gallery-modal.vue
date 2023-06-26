<template>
  <div v-if="showModal" class="app-gallery-modal center-flex-column">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({ displayModal: Boolean });
const showModal = computed(() => props.displayModal);
</script>

<style scoped>
.app-gallery-modal {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
