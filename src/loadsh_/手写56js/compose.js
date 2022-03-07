
// 高阶函数 HOC

function fn1(x) {
  return x + 1;
}

function fn2(x) {
  return x + 2;
}

function fn3(x) {
  return x + 3;
}

function fn4(x) {
  return x + 4;
}

// 从左往右计算
const compose = (...fns) => {
  // 越界判断
  if (fns.length === 0) return num => num;
  if (fns.length === 1) return fns[0]; 

  return fns.reduce((pre, cur) => {
    return (num) => {
      return pre(cur(num))
    }
  })

}

const a = compose(fn1, fn2, fn3, fn4)(1);
