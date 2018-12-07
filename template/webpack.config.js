const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
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
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    stats: {
      hash: false,
      assets: false,
      version: false,
      modules: false,
      timings: false
    }
  },
  performance: {// 配置如何展示性能提示(false不提示)
    hints: false
  },
  devtool: '#eval-source-map'
}