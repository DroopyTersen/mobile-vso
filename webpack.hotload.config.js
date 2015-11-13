var path = require('path')
var webpack = require('webpack')

// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     './src/client'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   plugins: [
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ],
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loaders: ['babel'],
//       exclude: /node_modules/,
//       include: __dirname
//     }, {
//       test: /\.css?$/,
//       loaders: [ 'style', 'raw' ],
//       include: __dirname
//     }]
//   }
// }

module.exports = {
  entry: [
    "babel-polyfill",
    'webpack-hot-middleware/client',
    "./src/client/client.js"
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, "src"),
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    }, {
      test: /\.css?$/,
      loaders: [ 'style', 'raw' ],
      include: __dirname
    }]
  }
}



var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    //react: ['react', 'react-dom'],
    'webpack-hot-middleware/client',
    app: "./src/client/client.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //     React: "React", react: "React", "window.react": "React", "window.React": "React"
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "react",
    //   filename: "react.js",
    //   minChunks: Infinity,
    // }),
    //new webpack.IgnorePlugin(/react/),
    //new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, "src"),
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    }, {
      test: /\.css?$/,
      loaders: [ 'style', 'raw' ],
      include: __dirname
    }]
  }
}