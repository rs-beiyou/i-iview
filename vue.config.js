const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(css|js|html)$'),
          threshold: 0,
          minRatio: 0.8
        })
      )
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/theme/index.less')]
    }
  },
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'http://',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
