


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


