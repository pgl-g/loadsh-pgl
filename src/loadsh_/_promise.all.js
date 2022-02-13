


Promise.prototype.all = function(promises) {
  let results = [];
  let promiseCount = 0;
  let promiseLength = promises.length;

  return new Promise((resolve, reject) => {
    for (const val of promises) {
      Promise.resolve(val).then(function(res) {
        promiseCount++;
        results.push(res);

        // 当所有的函数都执行正确的时候， resolve输出正确的结果
        if (promiseCount === promiseLength) {
          return resolve(results);
        }
      }, (e) => {
        return reject(e);
      })
    }
  })
}

