<template>
  <div class="mouseUse">
    <router-link to="/mouse-use/initial" class="nav-item">initial</router-link>
    <router-link to="/mouse-use/useMouse" class="nav-item">useMouse</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'mouseUse'
}
</script>

<style lang="scss" scoped>
.mouseUse {
  a + a {
    padding-left: 15px;
  }
}
</style>
