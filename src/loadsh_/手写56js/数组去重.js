


let arr = [[1, 2, 3], [3, 4, 5, [2, 20, 1]], 3, 1];

// 普通递归写法
function flat(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flat(item));
    } else {
      result.push(item);
    }
  })

  return result;
}



// reduce递归写法
function flat1(arr) {
  const result = arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat1(cur) : cur);
  }, []) 

  return result;
}

// while去重写法
function flat2(arr) {
  let result = arr || [];
  while(result.some(item => Array.isArray(item))) {
    result = [].concat(...result);
  }
  return result;
}


console.log(flat2(arr));