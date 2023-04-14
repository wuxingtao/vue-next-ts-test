import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需安装@types/node扩展node语法
// https://vitejs.dev/config/

const resolve = (src) => {
  return path.resolve(__dirname, src)
}
export default defineConfig({
  // base: '/', // 相当于publicPath
  // root: mode === 'development' ? 'src/pages' : '',
  // build: {
  //   rollupOptions: {
  //     input: {
  //       index: resolve('public/index.html'),
  //       nested: resolve('public/nested.html')
  //     }
  //   }
  // },
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/pages/index/main.ts',
          filename: 'index.html', //打包后生成的html文件名
          template: 'index.html',
          injectOptions: {
            data: {
              title: 'index',
              injectScript: `<script src="src/modules/inject.js"></script>`
            }
          }
        },
        {
          entry: 'src/pages/nested/main.ts',
          filename: 'nested.html', //打包后生成的html文件名
          template: 'nested.html',
          injectOptions: {
            data: {
              title: 'other page',
              injectScript: `<script src="src/modules/inject.js"></script>`
            }
          }
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
