
const path = require('path');

module.exports = {
  entry: 'dist',
  output: {
    path: path.resolve(__dirname, './src/index.js'),
    filename: 'bunild.js'
  }
}