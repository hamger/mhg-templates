const path = require('path');

const { NODE_ENV } = process.env

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

function assetsPath(_path) {
  return path.posix.join('static', _path)
}

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: NODE_ENV === 'production'
      ? './'
      : '/',
    path: resolve('dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: resolve('src'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:8].[ext]')
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:8].[ext]')
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:8].[ext]')
        },
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    alias: {
      '@': resolve('src'),
      'static': resolve('static'),
    },
    modules: [
      'node_modules',
      resolve('src'),
    ],
    extensions: ['.js', '.jsx'],
    mainFiles: ['index']
  },

  plugins: [
  ]
}