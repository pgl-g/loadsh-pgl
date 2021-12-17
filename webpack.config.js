
const path = require('path');

// 删除输出目录中之前旧的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bunild.js'
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin() // 删除输出目录中之前旧的文件
  ],
  // devServer: {
  //   contentBase: path.join(__dirname, './dist'), // 对外提供访问路径
  //   compress: true, // 是否使用zip进行压缩
  //   port: 9090, // 端口号
  //   hot: true,
  //   // inline: true // 自动刷新配置
  // }
}