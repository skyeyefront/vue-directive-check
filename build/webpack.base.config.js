module.exports = {
  module: {
    preLoaders: [ {
      test: /\.js/,
      loader: 'eslint',
      exclude: /node_modules/,
    } ],
    loaders: [ {
      test: /\.js/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: [ 'style', 'css' ],
      exclude: /node_modules/,
    }, {
      test: /\.html$/,
      loader: 'html',
      exclude: /node_modules/,
    } ]
  }
}