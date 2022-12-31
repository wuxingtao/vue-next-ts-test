/**
 * @Desc: index
 * @Author: wu xingtao
 * @Date: 2022/8/27
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/count-item',
    name: 'CountItem',
    component: () => import('@/views/Count/index.vue')
  },
  {
    path: '/mouse-use',
    name: 'mouseUse',
    component: () => import('@/views/mouseUse/index.vue'),
    children: [
      {
        path: 'initial',
        component: () => import('@/views/mouseUse/MouseWithInitial.vue')
      },
      {
        path: 'useMouse',
        component: () => import('@/views/mouseUse/MouseWithHook.vue')
      }
    ]
  },
  {
    path: '/transfer-test',
    name: 'transferTest',
    component: () => import('@/views/transferTest/index.vue')
  },
  // 作用域插槽测试
  {
    path: '/slot-test',
    name: 'SlotTest',
    component: () => import('@/views/slotTest/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
