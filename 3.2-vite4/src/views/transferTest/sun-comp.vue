<template>
  <div class='sun-comp-container'>
    <p>
      sun props msg: {{msg}}
    </p>
    <p>
      sun props desc: {{desc}}
    </p>
  </div>
</template>

<script setup lang='ts'>
import { reactive,withDefaults } from 'vue'
const props = withDefaults(defineProps<{msg:string,desc?:string}>(),{
  msg: '默认值',
  desc: '默认值'
})

const state = reactive({})
</script>

<style lang='scss' scoped>
.sun-comp-container{
  padding: 15px;
  background-color: #747bff;
}
</style>
