


// 浅拷贝

const obj = {a: 1, arr: [1, 2]};


function deepCopy(src) {
  const newObj = {};
  for (const key in src) {
    newObj[key] = src[key];
  }
  return newObj;
}

let shallowObj = deepCopy(obj);

shallowObj.a = 2;




