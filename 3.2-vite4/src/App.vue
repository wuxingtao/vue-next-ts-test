<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { routes } from '@/router'
import { ref } from 'vue'
const routerRecord = ref(routes)
</script>

<template>
<!--  <div>-->
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue" />-->
  <div id="nav">
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
