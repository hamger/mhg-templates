const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const utils = require('./utils')
const resolve = utils.resolve

var webpackConfig = {
  entry: './src/index.js',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}

module.exports = webpackConfig
