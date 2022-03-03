
let arr = [1, 1, 2, 7, 7, 7, 4, 5];

findNumber(arr);
function findNumber(arr) {
  let obj = arr.reduce((pre, cur) => {
    if (pre[cur]) {
      pre[cur]++
    } else {
      pre[cur] = 1;
    }
    return pre;
  }, {})

  // 寻找最大重复次数
  let max = 0;
  for (const i in obj) {
    if (obj[i] > max) {
      max = obj[i];
    }
  }

  // 进行排序数组
  let obj2 = Object.keys(obj);
  let num = obj2.find((key) => {
    return obj[key] === max;
  })

  return num;


}