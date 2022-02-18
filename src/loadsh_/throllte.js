


/**
 * 节流
 */

function throllte(fn, delay) {

  let time;
  let nowtime = new Date();
  let currtime = new Date() - 0;

  return function() {
    clearTimeout(time);
    let self = this;
    if (currtime - nowtime >= time) {
      fn.apply(self, arguments); // 在某个时间段执行一次
      nowtime = currtime;
    } else {
      // 让这个方法脱离事件后也能执行一次
      time = setTimeout(() => {
        fn.apply(self, arguments);
      }, delay);
    }
  }
}