

// promise
let pending = 'PENGING'; // 等待的状态
let resolves = 'RESOLVE'; // 成功的状态
let failure = 'FAILURE'; // 失败的状态

function Promise(cb) {
  // 状态
  this.status = pending;
  this.value = ''; // 成功的值
  this.reason = ''; // 失败的
  this.resolveList = [];
  this.rejectList = [];
  let that = this;

  // 成功的回调
  function resolve(val) {
    if (that.status === 'PENGING') {
      that.value = val;
      that.status = 'RESOLVE';
      that.resolveList.forEach(val => val());
    }
  }

  // 失败的回调
  function reject(val) {
    if (that.status === 'PENGING') {
      that.value = val;
      that.status = 'FAILURE';
      that.rejectList.forEach(val => val());
    }
  }

  try {
    cb(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function(resolveFn, rejectFn) {
  let self = this;
  if (self.status === 'RESOLVE') {
    resolveFn(self.value)
  }

  if (self.status === 'FAILURE') {
    rejectFn(self.reason)
  }

  if (self.status === 'PENGING') {
    typeof resolveFn === 'function' ? resolveFn(self.value) : self.resolveList.push(() => {resolveFn(self.value)});
    typeof rejectFn === 'function' ? rejectFn(self.reason) : self.rejectList.push(() => { rejectFn(self.reason) })
  }
}


// promise.all 必须是全部都是正常，但凡有一个是错的直接抛出

Promise.prototype.all = function(promise) {
  let index = 0;
  let result = [];
  let promiseLength = promise.length;
  return new Promise((resolve, reject) => {
    promise.forEach((item, i) => {
      //  将传进来的值都转换为有thenable
      Promise.resolve(item).then(res => {
        index++
        result[i] = res;
        if (index === promiseLength) {
          resolve(result);
        }
      }, (err) => {
        reject(err);
      })
    })
  })
}

// promise.race
Promise.prototype.race = function(promises) {

  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      }) 
    })
  })
}