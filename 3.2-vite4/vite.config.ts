import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需安装@types/node扩展node语法
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    'extensions':['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  }
})
