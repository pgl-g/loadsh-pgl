


/**
 * 多个Promise对象，谁先返回就输出谁
 * 应用场景：测试接口响应速度
 */

Promise.prototype.race = function(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(val => {
      Promise.resolve(val).then(res => {
        resolve(res);
      }, (err) => {
        reject(err)
      })
    })
  })
}