/* eslint-disable */

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const alias = {
  '@': resolve('src'),
  '@views': '@/views/',
  '@router': '@/router/',
  '@store': '@/store/',
  '@components': '@/components/',
  '@assets': '@/assets/',
  '@common': '@/common/',
  '@utils': '@/common/utils/'
}

module.exports = {
  publicPath: './',
  assetsDir: './',
  filenameHashing: false,
  lintOnSave: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 第三方插件配置
  pluginOptions: {
    'process.env': {
      NODE_ENV: '"development"'
    }
  },
  configureWebpack: {
    resolve: {
      alias,
      extensions: ['.vue', 'ts', 'tsx', '.js', '.scss', '.less', '.css']
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map'
    // devtool: 'cheap-module-eval-source-map'
  },
  chainWebpack: config => {},
  css: {
    loaderOptions: {
      less: {}
    },
    sourceMap: true
  }
}
