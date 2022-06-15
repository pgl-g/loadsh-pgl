



const PADDING = 'padding';
const SUCCESS = 'success';
const REJECT = 'reject';

class _Promise {
  constructor(cb) {
    this.status = PADDING; // 状态
    this.value = undefined; // 成功的值
    this.reason = undefined; // 失败的值
    this.onFnResolveList = [];
    this.onFnRejectList = [];
    const _this = this;

    // 成功的回调
    function resolve(val) {
      // queueMicrotask(() => {
        
      // })
      if (_this.status === PADDING) {
        _this.value = val;
        _this.status = SUCCESS;
        _this.onFnResolveList.forEach(fn => fn(val));
      } 
    }

    // 失败的回调
    function reject(val) {
      console.log(_this)
      if (_this.status === PADDING) {
        _this.reason = val;
        _this.status = REJECT;
        _this.onFnRejectList.forEach(fn => fn(val));
      }
    }


    // 如有问题直接抛出异常
    try {
      cb(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // then
  then(onFnResolve, onFnReject) {
    return new _Promise((resolves, reject) => {
      console.log(this.value, this.status);
      if (this.status === PADDING) {
        // 将成功的回调放到数组
        this.onFnResolveList.push(() => {
          try {
            const val = onFnResolve(this.value);
            resolves(val);
          } catch (error) {
            reject(error);
          }
        })


        // 将失败的回调放到数组
        this.onFnRejectList.push(() => {
          try {
            const reason = onFnReject(this.reason);
            resolves(reason);
          } catch (error) {
            reject(error);
          }
        })
      }

      if (this.status === SUCCESS && typeof onFnReject === 'function') {
        try {
          const val = onFnResolve(this.value);
          resolves(val);
        } catch (error) {
          reject(error);
        }
      }
  
      if (this.status === REJECT && typeof onFnReject === 'function') {
        try {
          const val = onFnReject(this.reason);
          resolves(val);
        } catch (error) {
          reject(error);
        }
      }
    })
  }

}



function fn() {
  return new _Promise((resolve, reject) => {
    resolve('成功1---fn');
    // reject('失败---fn')
  }).then((res) => {
    console.log(res, '---')
    // console.log(res, err)
    // console.log(res, err, '222');
    // resolve('成功2')
    return res;
  }, err => {
    // console.log(err)
  }).then(res => {
    console.log(res, '----====')
  })
}

fn();

function fn1() {
  return new Promise((resolve, reject) => {
    resolve('成功了---fn1')
    reject('失败了---fn1')
  }).then((res, err) => {
    // console.log(res, err);
  }).catch(err => {
    console.log(err)
  })
}
fn1()
