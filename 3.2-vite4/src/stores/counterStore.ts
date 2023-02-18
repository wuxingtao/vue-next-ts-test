/**
 * @Desc: countStore
 * @Author: wu xingtao
 * @Date: 2023/2/18
 */
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
      queList: []
    }
  },
  actions: {
    increment() {
      this.count++
    },
    addCount(payload?: number) {
      this.count += payload || 1
    },
    clear_count() {
      this.count = 0
    }
  }
})
