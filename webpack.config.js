
const path = require('path');

// 删除输出目录中之前旧的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 引入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bunild.js'
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(), // 删除输出目录中之前旧的文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
}