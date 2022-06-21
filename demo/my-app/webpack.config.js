

const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 使用多线程进行webpack构建
const HappyPack = require('happypack');


const os = require('os');

// 共享线程池
const happyThreadPool = HappyPack.threadPool({ size: os.cpus.length });

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './', 'src/index.js'),
  output: {
    path: path.resolve(__dirname ,'./dist'),
    filename: 'bundle.[].js'
  },
  module: {
    rules: [
      {
        loader: 'happyPack/loader?id=happybabel'
      },
      {
        test: /\.js|jsx$/, 
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }, 
      
      exclude: /node_modules/
      },    // 添加排除项
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"]
      },
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      path: path.resolve(__dirname, './public/index.html')
    }),
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader?cacheDirectory'],
      //共享进程池threadPool: HappyThreadPool 代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
      threadPool: happyThreadPool,
    })
  ]

}