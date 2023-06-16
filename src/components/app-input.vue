<template>
  <div class="app-input">
    <button class="minus-btn item" type="button" @click="decrement">
      <img src="@assets/svg/icon-minus.svg" alt="minus" />
    </button>
    <input
      class="number item"
      type="number"
      min="0"
      step="1"
      v-model="counter"
      @input="(e) => (counter = e.target.value.replace(/^0+/, 0))"
      @blur="formatInput"
    />
    <button class="plus-btn item" type="button" @click="increment">
      <img src="@assets/svg/icon-plus.svg" alt="plus" />
    </button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const emit = defineEmits(['value-change']);
const props = defineProps({ addedItems: { type: Number, default: 0 } });
const counter = ref(props.addedItems);

const formatInput = () => {
  counter.value = parseInt(counter.value);
};

watchEffect(() => {
  if (counter.value < 0 || counter.value === '') {
    counter.value = 0;
  }
  emit('value-change', counter.value);
});

const increment = () => {
  counter.value++;
};

const decrement = () => {
  if (counter.value > 0) {
    counter.value--;
  }
};
</script>

<style scoped>
.app-input {
  display: flex;
  align-items: center;
}

.app-input > .item {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--light-grayish-blue);
  outline: none;
}

.app-input > .minus-btn {
  border-radius: 0.5rem 0 0 0.5rem;
}

.app-input > .plus-btn {
  border-radius: 0 0.5rem 0.5rem 0;
}

.app-input > .number {
  border: none;
  font-weight: 700;
}

.app-input > .number::-webkit-outer-spin-button,
.app-input > .number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
