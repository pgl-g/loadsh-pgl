// 封装过哪些hooks



Array.prototype.myMap = function(fn, obj) {

  let result = []

  for(let i = 0; i < this.length; i++) {
    result.push(fn.call(obj, this[i], i, this));
  }
  return result;
}

let nums = [1, 2, 3]; 
let obj = { val: 5 }; 
let newNums = nums.myMap(function (item, index, array) { 
  console.log(item)
    return item + index + array[index] + this.val;
    // 对第一个元素，1 + 0 + 1 + 5 = 7
    // 对第二个元素，2 + 1 + 2 + 5 = 10
    // 对第三个元素，3 + 2 + 3 + 5 = 13
}, obj);
console.log(newNums);
//[7, 10, 13]


