/**
 * 发布模式
 */
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config.js')
var utils = require('./utils.js')

module.exports = merge(baseWebpackConfig, {
  entry: {
    'skyeye.vue.directive.check': path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'skyeye.vue.directive.check.min.js',
    library: 'SkyeyeVueDirectiveCheck',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.BannerPlugin(utils.banner(), {
      entryOnly: true
    })
  ]
})