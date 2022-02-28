const path = require('path');


// 优先打包第三方包
module.exports = {
  mode: 'production',
  entry: {
    vendors: ['react', 'react-dom', 'lodash']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]'
  }
}

// library：打包生成一个vendors.dll.js文件，
// 然后把文件的所有内容通过一个全局变量暴露出来，这个全局变量是占位符name代表vebdors