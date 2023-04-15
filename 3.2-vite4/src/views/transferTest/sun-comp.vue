<template>
  <div class='sun-comp-container'>
    <p>
      sun props msg: {{msg}}
    </p>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
defineProps<{msg:string}>()

const state = reactive({})
</script>

<style lang='scss' scoped>
.sun-comp-container{
  padding: 15px;
  background-color: #747bff;
}
</style>
