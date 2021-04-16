const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('webpack-api-mocker')
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = merge.smart(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ],
      }
    ]
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    open: false,
    // 配置控制台打印
    stats: {
      hash: false,
      assets: false,
      version: false,
      modules: false
    },
    before(app) {
      apiMocker(app, resolve('mock/index.js'))
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config;
