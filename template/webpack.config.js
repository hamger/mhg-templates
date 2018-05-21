const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.json']//后缀名自动补全
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {// 配置如何展示性能提示(false不提示)
    hints: false
  },
  devtool: '#eval-source-map'
}