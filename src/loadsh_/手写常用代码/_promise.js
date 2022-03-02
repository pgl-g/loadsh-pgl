




// 声明三个状态
let PENGING = 'penging'; // 等待
let SUCCESS = 'success'; // 成功
let FAILURE = 'failure'; // 失败

function _Promise(callback) {
  let _this = this;
  // 初始化
  // 刚开始时为 等待
  this.status = PENGING;
  // 成功的结果
  this.value = '';
  // 失败的结果
  this.reject = '';
  // 将值进行存储，状态变了的时候在拿出来
  this.fnSuccess = [];
  this.fnFailure = [];


  // 成功的回调
  function resolve(value) {
    if (_this.status === PENGING) {
      _this.value = value;
      _this.status = SUCCESS;
      _this.fnSuccess.forEach(fn => fn(value));
    }
  }

  // 失败的回调
  function reject(reject) {
    if (_this.status === PENGING) {
      _this.reject = reject;
      _this.status = FAILURE;
      _this.fnFailure.forEach(fn => fn(value));
    }
  }

  try {
    callback(resolve, reject);
  } catch (e) {
    reject(e); 
  }
}

_Promise.prototype.then = function(fnSuccess, fnFailure) {

  if (this.status === SUCCESS) {
    typeof fnSuccess === 'function' && fnSuccess(this.value);
  }

  if (this.state === FAILURE) {
    typeof fnFailure === 'function' && fnFailure(this.reject);
  }
  // 在状态发生变更的时候 进行取值
  if (this.state === PENGING) {
    typeof fnSuccess === 'function' && this.fnSuccess.push(fnSuccess);
    typeof fnFailure === 'function' && this.fnFailure.push(fnFailure);
  }

}
