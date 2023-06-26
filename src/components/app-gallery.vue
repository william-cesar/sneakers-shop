<template>
  <div class="app-gallery center-flex-column">
    <div class="img-area">
      <button v-if="previewMode" class="prev" @click="setPrevImage">
        <img src="@assets/svg/icon-previous.svg" alt="previous button" />
      </button>
      <button v-if="previewMode" class="next" @click="setNextImage">
        <img src="@assets/svg/icon-next.svg" alt="next button" />
      </button>
      <button
        v-if="previewMode"
        class="close"
        @click="emit('toggleModal', false)"
      >
        <img src="@assets/svg/icon-close.svg" alt="close button" />
      </button>
      <img
        :src="currentImage"
        alt="sneaker"
        class="current"
        @click="emit('toggleModal', true)"
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

const props = defineProps({ photos: Object, previewMode: Boolean });
const emit = defineEmits(['toggleModal']);

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

const setNextImage = () => {
  const list = props.photos.large;
  const idx = list.indexOf(currentImage.value);
  const nextIdx = idx + 1;

  if (nextIdx < list.length) {
    currentImage.value = list[nextIdx];
  } else {
    currentImage.value = list[0];
  }
};

const setPrevImage = () => {
  const list = props.photos.large;
  const idx = list.indexOf(currentImage.value);
  const prevIdx = idx - 1;

  if (prevIdx > -1) {
    currentImage.value = list[prevIdx];
  } else {
    currentImage.value = list.at(-1);
  }
};
</script>

<style scoped>
.app-gallery {
  gap: 2rem;
}

.app-gallery > .img-area {
  position: relative;
}

.app-gallery > .img-area > .current {
  border-radius: 1rem;
  height: 25rem;
  width: 23rem;
  object-fit: cover;
  cursor: pointer;
}

.app-gallery > .img-area > button {
  position: absolute;
  top: 50%;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
}

.app-gallery > .img-area > .prev {
  left: 0;
  transform: translate(-50%, -50%);
}

.app-gallery > .img-area > .next {
  right: 0;
  transform: translate(50%, -50%);
}

.app-gallery > .img-area > .close {
  padding: 0;
  width: fit-content;
  background-color: transparent;
  top: -2.5rem;
  right: 0;
}

.app-gallery > .img-area > button:not(.close) > img {
  width: 0.625rem;
  height: 0.625rem;
}

.app-gallery > .gallery {
  display: flex;
  gap: 2rem;
}

.app-gallery > .gallery > .gallery-thumb {
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 2px solid transparent;
}

.app-gallery > .gallery > .gallery-thumb.active {
  filter: brightness(0.75);
  border-color: var(--orange);
}
</style>
