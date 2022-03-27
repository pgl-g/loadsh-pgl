// 你不知道的JavaScript
// function foo(el) {
//   console.log(el,this.id)
// }

// var obj = {
//   id:'awesome'
// }

// var nums = [1,2,3]
// nums.forEach(foo,obj)

Function.prototype.pgCall = function(thisArg) {

  // this传进来的是foo函数/隐式调用
  var fn = this;
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = fn;
  thisArg.fn();
}

function foo() {
  console.log('函数执行了', this);
}


function add(num1, num2) {
  var num3 = 1;
  console.log(this, num1, num2);
  return num1 + num2;
}

var obj = {
  num1: 1,
}


const result = add.call(obj, 20, 20);
console.log(result);
foo.pgCall({name: '1'});
