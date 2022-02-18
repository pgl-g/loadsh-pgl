

/**
 * 防抖函数
 */

function deBounce(fn ,delay) {
  let time;
  return function(e) {
    clearTimeout(time);
    let self = this;
    time = setTimeout(() => {
      fn.apply(self, arguments);
    }, delay);
  }
}