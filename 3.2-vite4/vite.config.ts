import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需安装@types/node扩展node语法
// https://vitejs.dev/config/

const resolve = (src) => {
  return path.resolve(__dirname, src)
}
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve('pages/index/index.html'),
        nested: resolve('pages/nested/index.html')
      }
    }
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          // entry: resolve('src/pages/index/main.ts'),
          entry: 'src/pages/index/main.ts',
          filename: 'index.html', //打包后生成的html文件名
          template: 'src/pages/index/index.html',
          injectOptions: {}
        },
        {
          entry: 'src/pages/nested/main.ts',
          filename: 'nested.html', //打包后生成的html文件名
          template: 'src/pages/nested/index.html',
          injectOptions: {}
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
