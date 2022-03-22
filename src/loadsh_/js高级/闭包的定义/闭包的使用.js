
function foo() {
  console.log('foo');
}


// 返回新的数组
Array.prototype.filter = function(fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}