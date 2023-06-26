<template>
  <app-gallery :photos="photos" @toggleModal="toggleModal" />
  <app-gallery-modal :displayModal="displayModal">
    <app-gallery
      :photos="photos"
      :previewMode="true"
      @toggleModal="toggleModal"
    />
  </app-gallery-modal>
</template>

<script setup>
import { ref } from 'vue';
import AppGallery from '@components/app-gallery.vue';
import AppGalleryModal from '@components/app-gallery-modal.vue';

const props = defineProps({ photos: Object });
const displayModal = ref(false);

const toggleModal = (evt) => {
  displayModal.value = evt;
};
</script>
