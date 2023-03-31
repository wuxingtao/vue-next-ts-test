<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { routes } from '@/router'
import { ref } from 'vue'
const routerRecord = ref(routes)
</script>

<template>
  <div id="nav">
    <h3>page: nested.html</h3>
    <template v-if="routerRecord">
      <router-link v-for="(item, index) in routerRecord" :to="item.path" :key="index">{{ item.name }}</router-link>
    </template>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item {
  margin-right: 15px;
}

.content {
  margin-bottom: 10px;
}
</style>
