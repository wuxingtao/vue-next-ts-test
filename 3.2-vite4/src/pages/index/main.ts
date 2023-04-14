/**
 * @Desc: main
 * @Author: wu xingtao
 * @Date: 2023/3/30
 */
import { createApp } from 'vue'
import router from '@/router/index'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(router).mount('#app')
