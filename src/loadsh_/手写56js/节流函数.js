


// 在保证在一段时间内，只有第一次执行是生效的
// 时间差进行节流 
function throllet(fn, delay) {
  let timer = null;
  let now = new Date();
  let nextNow = new Date() - 0;
  return function(...args) {
    if (nextNow - now > timer) {
      fn.apply(this, args);
      now = nextNow;
    } else {
      if (timer) clearTimeout(timer);
      
      timer = setTimeout(() => {
        fn.apply(this, args);
        clearTimeout(timer);
      }, delay);
    }
  }
}

// 布尔值进行节流
function throllet1(fn, delay) {
  let flag = true;
  return function(...args) {
    if (!flag) return;
    flag = false;
    let timer = setTimeout(() => {
      fn.apply(this, args);
      flag = true;
      clearTimeout(timer);
    }, delay)
  }
}



function debounce(delay, fn) {

  let timer;

  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, ...args);
    }, delay);
  }


}


function throllet() {


}

const now = new Date();
console.log(now)

// 1654617232  1654617292