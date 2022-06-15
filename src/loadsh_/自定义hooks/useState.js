
// 手动实现hooks中的useState

// 定义初始值
let currenValue;
// 单次调用
function _UseState(initialValue = null) {
  // 一个是用户输入值/默认初始值
  const state = currenValue || initialValue;

  const newState = newValue => {
    currenValue = newValue;
    // 进行render树更新 类似于setState
    render();
  }
  return [state, newState];
}




// 多次调用
let index = 0;
let currenInitValueBox = [];
function _UseStates(initvalue) {
  index++;
  const currentIndex = index;
  currenInitValueBox[currentIndex] = currenInitValueBox[currentIndex] || initvalue;
  const setValue = newValue => {
    currenInitValueBox[currentIndex] = newValue;
    render();
  }
  return [currenInitValueBox[currentIndex], setValue];
}

const [init, setInit] = _UseState(0);
