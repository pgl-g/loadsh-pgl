

/**
 * 深拷贝
 *  1. 可以使用json.parse json.stringify
 *  2. for in 递归实现
 *  3. 使用forEach实现
 */ 
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
