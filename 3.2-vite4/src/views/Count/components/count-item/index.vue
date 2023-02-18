<template>
  <div class="container">
    <h2>count: {{ state.count }}</h2>
    <h2>double: {{ state.double }}</h2>
    <div class="count-tool">
      <button :onClick="handleCountAdd">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, onUnmounted,ComputedRef } from 'vue'

// 引入useStore
import {useCounterStore} from '@/stores/counterStore'
import eventThrottle from '@/common/utils/throttle'
interface Count {
  count: number
  double: ComputedRef
}

const state: Count = reactive<Count>({
  count: 0,
  double: computed(() => state.count * 2)
})

const counter = useCounterStore()

const handleCountAdd = eventThrottle.throttle(() => {
  state.count++
  counter.addCount()
  console.log('pinia state count: ', counter.count)
}, 100)

/* 清除count store */
onUnmounted(() => {
  counter.clear_count()
})
</script>

<style scoped></style>
