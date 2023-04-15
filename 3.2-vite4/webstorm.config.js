const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less', '.vue', '.ts'],
    alias: {
      '@': resolve('./src'),
      '@views': resolve('src/views'),
      '@api': resolve('src/services/api'),
      '@common': resolve('src/common'),
      '@router': '@/router/',
      '@assets': '@/assets',
      '@utils': resolve('src/utils'),
      '@export': '@/export',
      '@client': '@/views/client',
      '@waybill': '@/views/waybill',
      '@enum': '@/enum/'
    }
  }
}
