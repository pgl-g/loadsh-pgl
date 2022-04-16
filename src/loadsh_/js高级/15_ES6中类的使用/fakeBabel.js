// let obj = {
//   key: 1,
//   value: 2
// }


// const xx = Object.defineProperty({}, obj.key, obj);
// console.log(xx);

// let arr = [
//   {
//     label: '终南山',
//   },
//   {
//     label: '张三'
//   }
// ]
// const [items, ...res] = arr;

// console.log(items);


// const msg = '哈哈';

// var str = '///'
// console.log(window.msg)

const btns = document.getElementsByTagName('button');


// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     console.log(i + '我点击率' + '由于var没有作用域等同于window，所以拿到的i是window下执行完的数值')
//   }
// }

// for (var i = 0; i < btns.length; i++) {
//   (function(m) {
//     btns[m].onclick = function() {
//       console.log(m + '我点击率' + '通过自调用函数产生函数作用域产生闭包，外部函数依次获取调用次数，实现')
//     }
//   })(i)
// }


for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    console.log(i + '我点击率' + 'let会产生块级作用域使其内部依次调用，window不能访问内部块级数据')
  }
}