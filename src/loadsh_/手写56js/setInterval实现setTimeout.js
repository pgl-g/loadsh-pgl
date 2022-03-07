
// 在规定的时间内完成
const mySetTimeout = (fn, delay) => {

  const timer = setInterval(() => {
    fn();
    clearInterval(timer);
  }, delay);

}