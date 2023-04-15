<template>
  <div class='page__lists'>
    <a :href='item.href' v-for='(item,index) in state.pageList' :key='index'>{{item.name}}</a>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  pageList: [
    {
      name: 'index.html',
      href: '/index.html'
    },
    {
      name: 'nested.html',
      href: '/nested.html'
    }
  ]
})
</script>

<style lang='scss' scoped>
.page__lists{
  padding: 10px;
  border: 1px solid #dedede;
  a+a{
    margin-left: 10px;
  }
}
</style>
