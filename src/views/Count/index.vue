<template>
  <div class="page-container">
    <h1>{{viewName}}</h1>
    <count-item></count-item>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import CountItem from '@components/count-item/index.vue'

export default {
  name: 'index',
  components: { CountItem },
  setup () {
    const date = reactive<{viewName: string}>({
      viewName: '计算页面'
    })
    return { ...toRefs(date) }
  }
}
</script>

<style scoped>

</style>
