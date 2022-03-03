// compose 高阶函数
function comPose() {

  // 根据调用顺序，第一个括号里是有许多参数
  let fns = [...arguments];

  return function() {

    let args = [...arguments]

    let result = fns.reduce((pre, cur) => {
      pre = cur.apply(this, pre);

      return Array.isArray(pre) ? pre : [pre];
    }, args)

    return result;
  }
}

let str = a * 1;

let sub = a + 2;

console.log(comPose(str, sub)(1));


// 实现从右往左

const commpone = (...fns) => {
  fns.reduce((pre, cur) => (...args) => pre(cur(...args)))
}