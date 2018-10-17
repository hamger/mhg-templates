const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = merge.smart(baseConfig, {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      }
    ]
  },

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    // 配置控制台打印
    stats: {
      hash: false,
      assets: false,
      version: false,
      modules: false
    }
  },

})

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
