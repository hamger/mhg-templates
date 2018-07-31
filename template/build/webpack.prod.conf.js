const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const utils = require('./utils')

var webpackConfig = {
  entry: utils.getEntry('src/**/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]/[name].js'
  },
  resolve: {
    extensions: [".jsx", ".json", ".js"],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      },
      {
        test: /.s[c|a]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [path.resolve(__dirname, '../src')]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}

// 在不同的页面中插入对应的js文件
var htmls = utils.getEntry('src/**/index.html')
var pages = Object.keys(htmls)
pages.forEach(filename => {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${filename}/${filename}.html`,
      template: htmls[filename],
      inject: 'head',
      chunks: [filename]
    })
  )
})

module.exports = webpackConfig
