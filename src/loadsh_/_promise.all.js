
Promise.prototype.all = function(promises) {

  // 返回一个promise对象
  return new Promise((resolve, reject) => {

    let index = 0; // 设置下标
    let result = [];
    const promisesLength = promises.length;

    // 每个请求
    promises.forEach((val, i) => {
      // 这里主要是越界判断是否含有thenable, 将对象直接转换为primise
      Promise.resolve(val).then(res => {
        index++;
        // 成功的每一项
        result[i] = res;

        // 三个都成功才返回
        if (index === promisesLength) {
          resolve(result);
        }
      }, (err) => {
        // 有一个报错直接抛出
       reject(err);
      })
    })
  })
}