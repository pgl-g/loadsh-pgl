


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


function throllte1(fn, delay) {
  // 上一次的时间
  let time = 0;

  return function() {
    let self = this;
    let args = arguments;
    // 本次时间
    let now = new Date();
    // 在规定的时间内执行一次
    if (now - time > delay) {
      fn.apply(self, args);
      time = now;
    }

  }
}

function debounce(fn, delay) {
  let time = null;
  return function(e) {
    clearTimeout(time);
    let that = this, context = arguments;
    time = setTimeout(() => {
      fn.apply(that, context);
    }, delay);
  }
}

function debounce1(fn, delay) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(...args);
    }, delay)
  }
}



// 重构防抖/节流合并
function mergeDebounceThrolle(fn, delay, type) {
  let timeout;
  let nowTime = new Date();
  let nextTime = new Date() - 0;
  return function(e) {
    clearTimeout(timeout);
    // 节流函数
    let self = this, context = arguments;
    if (type === 2 && nextTime - nowTime >= timeout) {
      fn.apply(self, context);
      nextTime = nowTime;      
    } else {
      timeout = setTimeout(() => {
        fn.apply(self, context);
      }, delay);
    }
  }
}




