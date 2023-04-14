import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'

const app = createApp(App)
// 全局变量
app.config.globalProperties.globalInfo = {
  name: 'global_name',
  aa: 1,
  bb: 2
}

app.use(router).mount('#app')
