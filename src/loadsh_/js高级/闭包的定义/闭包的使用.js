
// function foo() {
//   console.log('foo');
// }


// // 返回新的数组
// Array.prototype.filter = function(fn) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// }

function testArray() {

  var arr = new Array(1024 * 1024).fill(1);
  return function() {
    console.log(arr.length);
  }

}

var arrFns = [];
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    arrFns.push(testArray());
  }, 100 * i);
}

// arrFns = null
setTimeout(() => {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      arrFns.pop();
    }, 100 * 1)
  }
}, 10000);