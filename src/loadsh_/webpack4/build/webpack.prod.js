

// const path = require('path');
const { merge } = require('webpack-merge'); // 引入webpack-merge 功能模块
const common = require('./webpack.common'); // 引入webpack.common.js模块
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // 会生存调试完整的.map文件，但同时也会减慢打包速度
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, './src/index.html'), // new 一个插件实例
    // }),
    new CleanWebpackPlugin(), // 清理文件夹名称
    // new webpack.HotModuleReplacementPlugin() // 热更新插件
  ],
})