const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      screens: path.resolve(__dirname, './src/screens'),
      constants: path.resolve(__dirname, './src/constants'),
      utils: path.resolve(__dirname, './src/utils'),
      selectors: path.resolve(__dirname, './src/selectors'),
      api: path.resolve(__dirname, './src/api'),
    }
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};