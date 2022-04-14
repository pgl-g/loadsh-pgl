// let obj = {
//   key: 1,
//   value: 2
// }


// const xx = Object.defineProperty({}, obj.key, obj);
// console.log(xx);

let arr = [
  {
    label: '终南山',
  },
  {
    label: '张三'
  }
]
const [items, ...res] = arr;

console.log(items);