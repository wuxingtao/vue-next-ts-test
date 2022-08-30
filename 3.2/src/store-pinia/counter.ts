/**
 * @Desc: counter
 * @Author: wu xingtao
 * @Date: 2022/8/30
 */
import { defineStore } from 'pinia'

export const couterStore = defineStore({
  id: 'counterId',
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    increment() {
      this.count++
    },
    addCount(payload: number) {
      this.count += payload
    },
    clearCount() {
      this.count = 0
    }
  }
})
