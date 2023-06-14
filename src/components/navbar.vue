<template>
  <nav class="navbar">
    <router-link to="/" class="home-link"> sneakers </router-link>
    <ul class="pages-list">
      <li class="page-link">
        <router-link class="nav-link" to="/collections">
          Collections
        </router-link>
      </li>
      <li class="page-link">
        <router-link class="nav-link" to="/men"> Men </router-link>
      </li>
      <li class="page-link">
        <router-link class="nav-link" to="/women"> Women </router-link>
      </li>
    </ul>
    <div class="user-area">
      <cart />
      <img class="avatar" src="@root/avatar.png" alt="user avatar" />
    </div>
  </nav>
</template>

<script setup>
import Cart from './cart.vue';
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-block: 1rem;
  border-bottom: 1px solid var(--grayish-blue);
}

.navbar > .home-link {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
}

.navbar > .home-link:hover {
  transition: all 300ms;
  text-shadow: 1.5px 0 0 black;
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
