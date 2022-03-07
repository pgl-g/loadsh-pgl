



// 防抖函数
function debounce(fn, delay) {
  let timer = null;
  return function() {
    let args = arguments;
    let that = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(that, args);
      clearTimeout(timer);
    }, delay);
  }
}