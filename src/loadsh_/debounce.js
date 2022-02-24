

/**
 * 防抖函数
 */

function deBounce(fn ,delay) {
  let time;

  // 返回一个函数，这个函数会在一个时间区结束后的delay毫秒时执行fn函数
  return function(e) {

    // 保证函数调用时的上下文和参数，传递给 fn this指向input对象
    let args = arguments;
    let self = this;
    clearTimeout(time);
    time = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  }
}