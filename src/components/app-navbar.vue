<template>
  <nav class="navbar">
    <router-link to="/" class="home-link">
      <img src="@assets/svg/logo.svg" alt="sneakers" />
    </router-link>
    <ul class="pages-list">
      <li class="page-link">
        <router-link class="nav-link" to="/collections">
          {{ text.sections.collections }}
        </router-link>
      </li>
      <li class="page-link">
        <router-link class="nav-link" to="/men">
          {{ text.sections.men }}
        </router-link>
      </li>
      <li class="page-link">
        <router-link class="nav-link" to="/women">
          {{ text.sections.women }}
        </router-link>
      </li>
    </ul>
    <div class="user-area">
      <app-cart />
      <img class="avatar" src="@root/avatar.png" alt="user avatar" />
    </div>
  </nav>
</template>

<script setup>
import text from '@static/text.js';
import AppCart from './app-cart.vue';
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-block: 2rem;
  border-bottom: 1px solid var(--grayish-blue);
}

.navbar > .pages-list {
  display: flex;
  gap: 2rem;
}

.navbar > .pages-list > .page-link {
  list-style: none;
}

.navbar > .user-area {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
}

.navbar > .user-area > .avatar {
  height: 2rem;
}
</style>
