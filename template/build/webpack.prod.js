const path = require('path');
const merge = require('webpack-merge');
const MiniExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.common');

const config = merge.smart(baseConfig, {
  mode: 'production',
  // optimization: {
  //   minimize: false,
  //   sideEffects: true,
  //   usedExports: true,
  //   providedExports: true
  // },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniExtractPlugin.loader,
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
        ]
      }
    ]
  },
  plugins: [
    new MiniExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css'
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
  ]
});

module.exports = config;
