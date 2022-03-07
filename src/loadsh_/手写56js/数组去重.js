
let arr = [1, 2, 2, 1, 3, 4, 5, 6, 2];

// 数组去重
function duplicate(arr) {
  return [...new Set(arr)];
}

// 利用reduce进行数组去重
function duplicate1(arr) {
  const res = [];
  arr.reduce((pre, cur) => {

    if (!pre.has(cur)) {
      pre.set(cur, 1);
      res.push(cur);
    } 

    return pre;
    // 映射的开始就将数组进行了去重
  }, new Map());
}

duplicate1(arr);