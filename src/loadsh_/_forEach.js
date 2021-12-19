

/**
 * 重写foreach方法
 * @param {object} params 
 * @param {Function} fn 
 */

function _forEach(params, fn) {
  if(Array.prototype.isPrototypeOf(params) && params.length > 0) {
    for (let i = 0; i < params.length; i++) {
      fn.call(null, params[i], i, params);      
    }
  } else {
    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        fn.call(null, params[key], key);
      }
    }
  }
}
module.exports = {
  _forEach
} 