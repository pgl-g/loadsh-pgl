

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 引入css分离文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'), // 入口文件
  output: {
    path: path.join(__dirname, '/dist'), // 打包后文件存放的位置
    filename: 'bundle.js'
  },
  devServer: {
    // contentBase: 该配置项指定了服务器资源的根目录，如果不配置contentBase的话，那么contentBase默认是当前执行的目录,一般是项目的根目录
    port: 9000,
    host: 'localhost',
    headers: {
      // 该配置项可以在HTTP响应中注入一些HTTP响应头
      'X-foo': '111222'
    },
    hot: true, // 开启模块热替换 会自动添加new webpack.HotModuleReplacementPlugin() // 热更新插件
    open: true, // 第一次构建完成，自动打开网页
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://www.baidu.com', // 目标接口的域名
        secure: true, // https的时候，使用该参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 重写路径
        }
      }
    }
  },
  devtool: 'source-map', // 会生存调试完整的.map文件，但同时也会减慢打包速度
  // loader实现不同格式文件的处理，转换为浏览器认识的文件格式
  module: {
    rules: [
      // 一旦匹配到.js文件，babel-loader就会调用babel-core到api使用 babel-preset-ent进行转码
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/, // 正则匹配.css文件结尾
        use: ['style-loader', 'css-loader']
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: ['css-loader']
        // }) // 需要用到的loader一定是这个顺序，因为调用loader是从右往左的
      },
      {
        test: /\.scss|sass$/, // 正则匹配.scss | sass文件结尾
        use: ['style-loader', 'css-loader', 'sass-loader'] // 需要用到的loader一定是这个顺序，因为调用loader是从右往左的
      }
    ]
  },
  // 插件plugin是用来拓展webpack功能的，它会在整个构建过程中生效，执行相关的任务
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // new 一个插件实例
    }),
    new CleanWebpackPlugin(), // 清理文件夹名称
    // new webpack.HotModuleReplacementPlugin() // 热更新插件
    // new ExtractTextPlugin('css/index.css') // 打包将css分离到dist文件夹下到css文件中的index.css
  ],

}