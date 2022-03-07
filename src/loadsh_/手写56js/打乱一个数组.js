

let arr = [1, 2, 3, 4];
// 1
const shuffle = (arr) => {
  // 排序
  return arr.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  })
}

console.log(shuffle(arr));