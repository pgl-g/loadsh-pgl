

// 深拷贝
function deepClone(deepObj) {
  let result = typeof deepObj.splice === "function" ? [] : {};
  if (deepObj && typeof deepObj === 'object') {
    for (const key in deepObj) {
      if (Object.prototype.toString.call(deepObj) === '[object Object]') {
        result[key] = deepClone(deepObj[key]);
      } else {
        result[key] = deepObj[key];
      }
    }
    return result;
  }
  return deepObj;
}
const result = deepClone(obj);
result.a = 2;
console.log(deepClone(obj));

