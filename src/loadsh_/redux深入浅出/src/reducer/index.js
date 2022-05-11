

/**
 * reducer 专门处理发送过来的action
 */

// 创建初始化数据
const initialValue = { value: '默认值' };
// 会拿到action文件中的状态进行改变，并返回
const rootReducer = (state = initialValue, actions) => {
  switch (actions.type) {
    case 'send_type':
    return Object.assign({}, state, actions);
    default:
    return state;
  }
}


export default rootReducer;




