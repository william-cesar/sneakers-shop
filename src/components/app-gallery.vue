<template>
  <div class="app-galley center-flex-column">
    <div class="img-area">
      <button class="prev" @click="setPrevImage">
        <img src="@assets/svg/icon-previous.svg" alt="previous btn" />
      </button>
      <button class="next" @click="setNextImage">
        <img src="@assets/svg/icon-next.svg" alt="next btn" />
      </button>
      <img
        :src="currentImage"
        alt="sneaker"
        class="current"
        @click="emit('openModal')"
      />
    </div>
    <div class="gallery">
      <img
        v-for="(thumb, idx) in photos.thumb"
        :src="thumb"
        alt="sneaker thumb"
        :key="idx"
        :class="['gallery-thumb', thumbClass(thumb)]"
        @click="setCurrentImage(thumb)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ photos: Object });
const emit = defineEmits(['openModal']);

const currentImage = ref(props.photos.large[0]);
const currentThumb = ref(props.photos.thumb[0]);

const thumbClass = (thumb) => {
  const thumbSubstr = thumb.replace('-thumb.jpg', '');
  return currentImage.value.includes(thumbSubstr) && 'active';
};

const setCurrentImage = (thumbSrc) => {
  currentThumb.value = thumbSrc;
  currentImage.value = thumbSrc.replace('-thumb', '');
};
</script>

<style scoped>
.app-galley {
  gap: 2rem;
}

.app-galley > .img-area {
  position: relative;
}

.app-galley > .img-area > .current {
  border-radius: 1rem;
  height: 25rem;
  width: 23rem;
  object-fit: cover;
  cursor: pointer;
}

.app-galley > .img-area > button {
  position: absolute;
  top: 50%;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}

.app-galley > .img-area > .prev {
  left: 0;
  transform: translate(-50%, -50%);
}

.app-galley > .img-area > .next {
  right: 0;
  transform: translate(50%, -50%);
}

.app-galley > .img-area > button > img {
  width: 0.625rem;
  height: 0.625rem;
}

.app-galley > .gallery {
  display: flex;
  gap: 2rem;
}

.app-galley > .gallery > .gallery-thumb {
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 2px solid transparent;
}

.app-galley > .gallery > .gallery-thumb.active {
  filter: brightness(0.75);
  border-color: var(--orange);
}
</style>
