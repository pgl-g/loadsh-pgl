


// // new Promise((resolve, reject) => {
// //   resolve();
// //   reject();
// // }).then((res) => {
// //   console.log(res);
// // }, err => {
// //   console.log(err);
// // })

// const PADDING = 'PADDING'; // 等待状态
// const FULFILLED = 'FULFILLED'; // 成功状态
// const REJECTED = 'REJECTED'; // 失败状态


// // executor 
// function PglPromise(executor) {
//     this.statusType = PADDING; // 初始化状态类型
//     this.success = null; // 存储成功的值
//     this.reason = null; // 存储失败的值、
//     this.fulfilledList = []; // 当为等待状态时将成功的值传进去
//     this.rejectList = []; // 当等待状态如返回失败的值传进去

//     let _this = this;
//     // 成功的回调
//     function resolve(val) {
//       if (_this.statusType === 'PADDING') {
//         _this.statusType = FULFILLED;
//         _this.success = val;
//         _this.fulfilledList.forEach(fn => fn());
//       }
//     }

//     // 失败的回调
//     function reject(reason) {
//       if (_this.statusType === 'PADDING') {
//         _this.statusType = REJECTED;
//         _this.reason = reason;
//         _this.rejectList.forEach(fn => fn());
//       }
//     } 

//     // 将成功的执行函数直接抛出
//     try {
//       executor(resolve, reject);
//     } catch (error) {
//       reject(error)
//     }
// }

// PglPromise.prototype.pglThen = function(fulfilledFn, rejectsFn) {
//   if (typeof fulfilledFn !== 'function') fulfilledFn = function(val) { return val };

//   if (typeof rejectsFn !== 'function') rejectsFn = function(err) { return err };

//   const MyPromise = new PglPromise((resolve, reject) => {

//     if (this.statusType === FULFILLED) {
//       setTimeout(() => {
//         try {
//           const val = fulfilledFn(this.success);
//           resolve(val);
//         } catch (error) {
//           reject(error);
//         }
//       }, 0)
//     }

//     if (this.statusType === REJECTED) {
//       setTimeout(() => {
//         try {
//           const val = rejectsFn(this.reason);
//           resolve(val);
//         } catch (error) {
//           reject(error);
//         }
//       },0)
//     }

//     // 等待
//     if (this.statusType === PADDING) {
//       // 将成功的状态先存
//       this.fulfilledList.push(() => {
//         setTimeout(() => {
//           try {
//             const val = fulfilledFn(this.success);
//             resolve(val);
//           } catch (err) {
//             reject(err);
//           }
//         }, 0)
//       });

//       // 将失败的状态先存
//       this.rejectList.push(() => {
//         setTimeout(() => {
//           try {
//             const reason = rejectsFn(this.reason);
//             resolve(reason);
//           } catch (error) {
//             reject(error);
//           }
//         }, 0)
//       })
//     }


//   })

//   return MyPromise;
// }

// PglPromise.prototype.pglCatch = function(rejectsFn) {
//   return this.pglThen(null, rejectsFn);
// }


// 使用类方法进行重写promise


// new Promise()

const PADDING = 'padding'; // 等待
const FULFILLED = 'fullfilled'; // 成功
const REJECTED = 'rejected'; // 失败
class PglPromise {
  constructor(executor) {
    this.status = PADDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledList = [];
    this.onRejectedList = [];


    const resolve = (val) => {
      queueMicrotask(() => {
        if (this.status === PADDING) {
          this.status = FULFILLED;
          this.value = val;
          this.onFulfilledList.forEach(fn => fn(this.value));
        }
      })
    }

    const reject = (reason) => {
      // console.log(reason)
      queueMicrotask(() => {
        if (this.status === PADDING) {
          this.status = REJECTED;
          this.reason = reason;
          this.onRejectedList.forEach(fn => fn(this.reason));
        }
      })
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);      
    }
  }


  then = function(onFulfilled, onRejected) {
    
    // 越界判断
    const defaultOnRejected = err => { throw err };
    onRejected = onRejected || defaultOnRejected;

    return new PglPromise((resovle, reject) => {

      // 在等待的情况下
      if (this.status === PADDING) {
        // 将成功的回调放到数组里
        this.onFulfilledList.push(() => {
          try {
            const val = onFulfilled(this.value);
            resovle(val);
          } catch (error) {
            reject(error);
          }
        })

        // 将失败的回调放到数组里
        this.onRejectedList.push(() => {
          try {
            const reason = onRejected(this.reason);
            resovle(reason);
          } catch (error) {
            reject(error);
          }
        })
      }

      // 在成功的情况下
      if (this.status === FULFILLED && onFulfilled) {
        // 将成功的回调放到数组里
        this.onFulfilledList.push(() => {
          try {
            const val = onFulfilled(this.value);
            resovle(val);
          } catch (error) {
            reject(error);
          }
        })
      }

      // 在失败的情况
      if (this.status === REJECTED && onRejected) {
        // 将成功的回调放到数组里
        this.onRejectedList.push(() => {
          try {
            const val = onFulfilled(this.value);
            resovle(val);
            console.log(val)
          } catch (error) {
            reject(error);
          }
        })
      }

    })

  }

  catch(onRejected) {
    this.then(undefined, onRejected);
  }
}



const promise = new PglPromise((resolve, reject) => {
  // resolve(1);
  reject(2);
}).then(res => {
  console.log('res', res);
}).catch(err => {
  console.log('catch', err)
});



