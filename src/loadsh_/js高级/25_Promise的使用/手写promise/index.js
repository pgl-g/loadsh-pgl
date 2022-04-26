


// new Promise((resolve, reject) => {
//   resolve();
//   reject();
// }).then((res) => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

const PADDING = 'PADDING'; // 等待状态
const FULFILLED = 'FULFILLED'; // 成功状态
const REJECTED = 'REJECTED'; // 失败状态


// executor 
function PglPromise(executor) {
    this.statusType = PADDING; // 初始化状态类型
    this.success = null; // 存储成功的值
    this.reason = null; // 存储失败的值、
    this.fulfilledList = []; // 当为等待状态时将成功的值传进去
    this.rejectList = []; // 当等待状态如返回失败的值传进去

    let _this = this;
    // 成功的回调
    function resolve(val) {
      if (_this.statusType === 'PADDING') {
        _this.statusType = FULFILLED;
        _this.success = val;
        _this.fulfilledList.forEach(fn => fn());
      }
    }

    // 失败的回调
    function reject(reason) {
      if (_this.statusType === 'PADDING') {
        _this.statusType = REJECTED;
        _this.reason = reason;
        _this.rejectList.forEach(fn => fn());
      }
    } 

    // 将成功的执行函数直接抛出
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error)
    }
}

PglPromise.prototype.pglThen = function(fulfilledFn, rejectsFn) {
  if (typeof fulfilledFn !== 'function') fulfilledFn = function(val) { return val };

  if (typeof rejectsFn !== 'function') rejectsFn = function(err) { return err };

  const MyPromise = new PglPromise((resolve, reject) => {

    if (this.statusType === FULFILLED) {
      setTimeout(() => {
        try {
          const val = fulfilledFn(this.success);
          resolve(val);
        } catch (error) {
          reject(error);
        }
      }, 0)
    }

    if (this.statusType === REJECTED) {
      setTimeout(() => {
        try {
          const val = rejectsFn(this.reason);
          resolve(val);
        } catch (error) {
          reject(error);
        }
      },0)
    }

    // 等待
    if (this.statusType === PADDING) {
      // 将成功的状态先存
      this.fulfilledList.push(() => {
        setTimeout(() => {
          try {
            const val = fulfilledFn(this.success);
            resolve(val);
          } catch (err) {
            reject(err);
          }
        }, 0)
      });

      // 将失败的状态先存
      this.rejectList.push(() => {
        setTimeout(() => {
          try {
            const reason = rejectsFn(this.reason);
            resolve(reason);
          } catch (error) {
            reject(error);
          }
        }, 0)
      })
    }


  })

  return MyPromise;
}

PglPromise.prototype.pglCatch = function(rejectsFn) {
  return this.pglThen(null, rejectsFn);
}