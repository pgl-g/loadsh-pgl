
// 要求：实现一个 add 方法 使计算结果能够满足如下预期：

// add(1)(2)(3)()=6
// add(1,2,3)(4)()=10


function add(...args1) {
  let allArgs = [...args1]

  const fn = (...args2) => {
    allArgs = [...args1, ...args2]

    return fn
  }

  fn.toString = function() {
    return allArgs.reduce((pre, next) => {
      return pre + next
    })
  }

  return fn
}
const res = add(1,2,3)(4)();
console.log(res)