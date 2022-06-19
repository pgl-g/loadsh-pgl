


let arr = [1, 1, 2, 3, 2, 2, 5];


// fun(arr)

function fun(arr) {

 let temp = {};
 let res = 0;
 let result = [];

 arr.forEach((item, i) => {
  if (temp[item] === undefined) {
    temp[item] = 1;
  } else {
    temp[item]+=1;
  }
})

console.log(temp);

for (const i in temp) {
  // console.log(temp[i])
  if (temp[i] > res) {
    result.length = 0;
    result.push(temp[i]);
    res = temp[i]
    // console.log(res);
  } else if (temp[i] === res) {
    result.push(i);
    res = temp[i]
    // console.log(res)
  }
}
}

foo(arr);

function foo(arr) {
  console.log(arr)
  // let index = arr.indexOf()
  let temp = {}
  arr.forEach((item, index) => {
    console.log(arr.indexOf(item) == index)
    if (arr.indexOf(item) == index) {
      temp[index] = 1;
    } else {
      temp[index] ++;
    }
  })
  console.log(temp)

  
}


