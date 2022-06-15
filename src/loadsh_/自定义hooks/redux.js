

/**初始状态 */

let initalState = {
  name: 'dcp',
  info: '彭格列'
}


// 订阅事件/触发事件 实现了监听data状态的变化。

let createStore = function(initalState) {
  let state = initalState;

  let listenerList = [];

  /** 订阅事件 */
  function subscripe(listener) {
    listenerList.push(listener);
  }

  /** 通知 */
  function changeState(newState = initalState) {
    state = newState;
    for (const listener of listenerList) {
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscripe,
    changeState,
    getState
  }


}


let store = createStore(initalState);

store.changeState({
  ...store.getState(),
  name: 'xxx'
});



