
// hook
useThrottle = (fn, delay, dep = []) => {
  const { current } = React.useRef({ fn, timer: null });
  React.useEffect(() => {
    current.fn = fn;
  },[fn]);

  return React.useCallback(function f(...arg) {
    // if (!current.timer) {
    //   current.timer = setTimeout(() => {
    //     delete current.timer;
    //   }, delay);
    //   current.fn.call(this, ...arg);
    // }
    delete current.timer;
    current.timer = setTimeout(() => {
      current.fn.call(this, ...arg);
    }, delay);
  }, dep);
};

