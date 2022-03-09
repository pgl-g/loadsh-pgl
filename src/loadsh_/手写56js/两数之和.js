


let nums = [2, 7, 11, 15];
let target = 9;

// console.log(nums.length - 1, nums.length)



function add(arr, target) {

  // 前面一个循环比较
  for(let i = 0; i < arr.length - 1; i++) {
    // 后一个循环比较
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    } 
  }

}

const res = add(nums, target);

console.log(res)