// 你不知道的JavaScript
// function foo(el) {
//   console.log(el,this.id)
// }

// var obj = {
//   id:'awesome'
// }

// var nums = [1,2,3]
// nums.forEach(foo,obj)

// Function.prototype.pgCall = function(thisArg) {

//   // this传进来的是foo函数/隐式调用
//   var fn = this;
//   thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window;
//   thisArg.fn = fn;
//   thisArg.fn();
// }

// function foo() {
//   console.log('函数执行了', this);
// }


// function add(num1, num2) {
//   var num3 = 1;
//   console.log(this, num1, num2);
//   return num1 + num2;
// }

// var obj = {
//   num1: 1,
// }


// const result = add.call(obj, 20, 20);
// console.log(result);
// foo.pgCall({name: '1'});

// 封装apply

// Function.prototype.pgApply = function(thisArg, argArray) {

//   let fn = this;

//   thisArg.fn = fn;

//   argArray = argArray ?? [];

//   const result = thisArg.fn(...argArray);

//   delete thisArg.fn;

//   return result
// }


// function foo() {
//   console.log(this, 'foo被调用了');
// }

// function add(num1, num2) {
//   console.log(this, num1, num2);
// }
// add.pgApply({}, [12, 2]);
// add.apply(this, [1, 2]);


// 封装bind
// Function.prototype.pglBind = function(thisArg, ...argArray) {
//   let fn = this;
//   // 越界判断
//   thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : [];
//   thisArg.fn = fn;
//   function proxyFn(...args) {
//     let allArgs = [...argArray, ...args];
//     const result = thisArg.fn(...allArgs);
//     delete thisArg.fn;
//     return result;
//   }
//   return proxyFn;

// }

// function foo(num1, num2) {
//   console.log(this, num1, num2)
//   return 30;
// }

// const res = foo.pglBind('', 22, 1);
// console.log(res());


function double(m) {
  console.log(m)
  return m * 2
}

function square(n) {
  console.log(n)
  return n ** 2
}

function hyCompose(...fns) {
  let length = fns.length;

  // for (let i = 0; i < length; i++) {
  //   if (typeof fns[i] !== 'function') throw new TypeError('Expected arguments are functions');
  // }


  // return function(...args) {
  //   let index = 0;
  //   let result = length ? fns[index].apply(this, args) : args;
  //   while(++index < length) {
  //     result = fns[index].call(this, result);
  //   }
  //   return result;
  // }

  return function(...args) {
    let result;
    let index = 0;
    while(++index < length) {
      result = fns[index].apply(this, args);
    }
    return result;
  }

}


var newFn = hyCompose(double, square)
console.log(newFn(10))

console.log(typeof typeof typeof null)

function f(x) {
  var x;
  console.log(x);
}
f(5)