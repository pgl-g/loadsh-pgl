

// const path = require('path');
const { merge } = require('webpack-merge'); // 引入webpack-merge 功能模块
const common = require('./webpack.common.js'); // 引入webpack.common.js模块

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    static: ['dist'],
    // contentBase: 该配置项指定了服务器资源的根目录，如果不配置contentBase的话，那么contentBase默认是当前执行的目录,一般是项目的根目录
    port: 9001,
    host: 'localhost',
    headers: {
      // 该配置项可以在HTTP响应中注入一些HTTP响应头
      'X-foo': '111222'
    },
    hot: true, // 开启模块热替换 会自动添加new webpack.HotModuleReplacementPlugin() // 热更新插件
    open: true, // 第一次构建完成，自动打开网页
    // inline: true,
    // overlay: true
    // 配置代理
    // proxy: {
    //   '/api': {
    //     target: 'http://www.baidu.com', // 目标接口的域名
    //     secure: true, // https的时候，使用该参数
    //     changeOrigin: true, // 是否跨域
    //     pathRewrite: {
    //       '^/api': '' // 重写路径
    //     }
    //   }
    // }
  },
})