
import { createStore } from 'redux'; // 创建一个Redux store 来存放应用中所有的 state
// applyMiddleware
// import thunk from 'redux-thunk'; // 使我们在action中返回函数，而不是只能返回一个对象，然后我们可以在函数中做很多事情，比如发送异步ajax
// 导入我们自己创建好的reducer
import { rootReducer } from '../reducer';
/**
 * createStore 接收三个参数，reducer （一个或多个），状态，applyMiddleware（中间件）
 * 【】reducer 作用收到action以后必须给出一个新的state，这样view才会发生变化，这种state的计算过程叫做reducer
 * initialState初始空对象，使用的时候会返回新状态，依次执行
 * applyMiddleware将所有的中间件组成一个数组
 * 
 * middleWare来自thunk处理异步，异步执行开发的action
 * 
 * state
 * 1. 单一数据源
 * 2. state是只读的
 * 3. 使用纯函数进行
 * 
 * action
 * 
 *    1. 必须要type属性表示要执行的动作
 *    2. action创建函数
 *    3. 只是描述有事情发生，并没有描述如何去更新state
 */

//  const initialState = {} // 初始化空对象，使用使会返回新状态
//  const middleware = [thunk];
 
 export const store = createStore(rootReducer);

