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


  then(onFulfilled, onRejected) {
    // 越界判断
    const defaultOnRejected = err => { throw err };
    onRejected = onRejected || defaultOnRejected;
    
    const defaultOnFulfilled = val => { return val };
    onFulfilled = onFulfilled || defaultOnFulfilled;

    return new PglPromise((resovle, reject) => {
      // 在等待的情况下
      if (this.status === PADDING) {
        // 将成功的回调放到数组里
        this.onFulfilledList.push(() => {
          try {
            const val = onFulfilled(this.value);
            resovle(val);
          } catch (error) {
            console.log(error)
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
          try {
            const val = onFulfilled(this.value);
            resovle(val);
          } catch (error) {
            reject(error);
          }
      }

      // 在失败的情况
      if (this.status === REJECTED && onRejected) {
          try {
            const reason = onRejected(this.reason);
            resovle(reason);
          } catch (error) {
            reject(error);
          }
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    this.then(() => {
      onFinally();
    }, () => {
      onFinally();
    })
  }

  static resovles(val) {
    return new PglPromise((resolve) => resolve(val));
  }

  static rejects(reason) {
    return new PglPromise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    return new PglPromise((resolve, reject) => {
      PglPromise.resovles(promises).then(res => {
        const result = [];
        let index = 0;
        res.forEach(item => {
          index++;
          item.then(it => {
            result.push(it);
            if (index === result.length) {
              resolve(result);
            }
          })
        })
      }).catch(err => {
        reject(err);
      })
    })
  }

  static allSetted(promises) {
    return new PglPromise((resovle, reject) => {
      const result = [];
      promises.forEach(item => {
        item.then(res => {
          result.push({ status: FULFILLED, value: res });
          if (promises.length === result.length) {
            resovle(result);
          }
        }).catch(err => {
          result.push({ status: FULFILLED, value: err });
          if (promises.length === result.length) {
            reject(result);
          }
        })
      })
    }) 
  }

  static race(promises) {
    // 打印执行越快的
    return new PglPromise((resolve, reject) => {
      promises.forEach(item => {
        item.then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    })
  }

  static any(promises) {
    // resolve必须等到有一个成功的结果
    // reject所有的都失败才执行reject
    const result = [];
    return new PglPromise((resovle, reject) => {
      promises.forEach(item => {
        item.then(resovle);
      }, err => {
        result.push(err);
        if (result.length === promises.length) {
          reject(new AggregateError(err));
        }
      })
    })
  }
}


const p1 = new PglPromise((resovle, reject) => {
  setTimeout(() => { resovle(1) }, 1000)
})

const p2 = new PglPromise((resovle, reject) => {
  setTimeout(() => { resovle(2) }, 2000)
})

const p3 = new PglPromise((resovle, reject) => {
  setTimeout(() => { resovle(3) }, 3000)
})

PglPromise.all([p1, p2, p3]).then(res => {
  console.log(res);
})

// PglPromise.resovles('111').then(res => {
//   console.log("res:", res);
// })

// PglPromise.rejects('222').catch(err => {
//   console.log('catch: ', err)
// })