<template>
  <div v-if="showModal" class="app-gallery-modal center-flex-column">
    <span class="close" @click="emit('closeModal')">&times;</span>
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({ displayModal: Boolean });
const emit = defineEmits(['closeModal']);

const showModal = computed(() => {
  return props.displayModal;
});
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

.close {
  color: #fff;
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}
</style>
