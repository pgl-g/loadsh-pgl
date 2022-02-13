
// 手动实现hooks中的useState

// 定义初始值
let currenInitValue;
// 单次调用
function _UseState(initValue = null) {
  // 一个是用户输入值/默认初始值
  const state = currenInitValue || initValue;

  const newState = newValue => {
    currenInitValue = newValue;
    // 进行render树更新 类似于setState
    render();
  }
  return [state, newState];
}




// 多次调用
let index = 0;
let currentValueBox = [];
function _UseStates(initvalue) {
  index++;
  const currentIndex = index;
  currenInitValue[currentIndex] = currenInitValue[currentIndex] || initvalue;
  const newValue = newValue => {
    currenInitValue[currentIndex] = newValue;
    render();
  }
  return [currenInitValue[currentIndex], newValue];
}

const [init, setInit] = _UseState(0);
