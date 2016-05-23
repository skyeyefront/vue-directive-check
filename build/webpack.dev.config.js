/**
 * 开发模式
 */
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config.js')

module.exports = merge(baseWebpackConfig, {
  entry: {
    'examples': path.resolve(__dirname, '../examples/webfrontend/src/index.js'),
    'vendor': [ 'jquery', 'vue', 'highlight.js' ]
  },
  output: {
    path: path.resolve(__dirname, '../examples/static/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
})