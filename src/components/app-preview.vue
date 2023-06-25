<template>
  <app-gallery :photos="photos" @openModal="openModal" />
  <app-gallery-modal
    :displayModal="displayModal"
    @closeModal="displayModal = false"
  >
    <app-gallery :photos="photos" />
  </app-gallery-modal>
</template>

<script setup>
import { ref } from 'vue';
import AppGallery from '@components/app-gallery.vue';
import AppGalleryModal from '@components/app-gallery-modal.vue';

const props = defineProps({ photos: Object });
const displayModal = ref(false);

const openModal = () => {
  displayModal.value = true;
};
</script>

<style scoped></style>
