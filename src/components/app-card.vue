<template>
  <section class="card">
    <img class="preview" :src="product.images.large[0]" alt="Sneaker preview" />
    <h3 class="title">{{ product.title }}</h3>
    <span class="price"> ${{ product.price.toFixed(2) }} </span>
    <div class="discount-section" v-if="product.oldPrice">
      <span class="old-price"> ${{ product.oldPrice.toFixed(2) }} </span>
      <span class="discount-tag"> -{{ product.discount }}% </span>
    </div>
    <router-link :to="route" class="see-more">
      <button class="see-more-btn">
        <img class="see-more-icon" src="@root/see-more.png" alt="eye icon" />{{
          text.seeMore
        }}
      </button>
    </router-link>
  </section>
</template>

<script setup>
import text from '@static/text.js';

const props = defineProps({ product: Object, type: String });
const route = `/${props.type}/${props.product.id}`;
</script>

<style scoped>
.card {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0.25rem 0.25rem 1rem var(--dark-grayish-blue);
}

.card > .title {
  font-size: 1rem;
}

.card > .preview {
  width: 100%;
}

.card > .discount-section {
  display: flex;
  gap: 1rem;
}

.card > .discount-section > .old-price {
  color: var(--grayish-blue);
  text-decoration: line-through;
}

.card > .see-more > .see-more-btn > .see-more-icon {
  width: 1rem;
}
</style>
