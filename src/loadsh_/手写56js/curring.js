

const add = (a, b, c) => a + b + c;


const currying = (fn, ...args) => {
  let allArgs = [...args];
  // 获取实参中的参数个数
  let num = fn.length;
  const res = (...args2) => {
    allArgs = [...args, ...args2];
    if (allArgs.length === num) {
      return fn(...allArgs);
    } else {
      return res;
    }
  }
  return res;
}

let a = currying(add, 1);
console.log(a(2)(3)) // 1 + 2 + 3=6
