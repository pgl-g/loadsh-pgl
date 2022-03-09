

// let arr = [1, 2, 3, 4];
// // 1
// const shuffle = (arr) => {
//   // 排序
//   return arr.sort(() => {
//     return Math.random() > 0.5 ? 1 : -1;
//   })
// }

// console.log(shuffle(arr));














let arr1 = [1, 2, 3, 4];

// 洗牌算法
function ppp(arr1) {
  let result = [];

  while(arr1.length > 0) {
    let num = Math.floor(Math.random() * arr1.length);
    result.push(arr1.splice(num, 1)[0])
  }
  return result;
}
