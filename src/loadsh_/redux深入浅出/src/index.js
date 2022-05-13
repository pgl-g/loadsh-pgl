import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; // 全局化的管理组件,使所有子组件都可以拿到state, 接收state作为props，然后通过context往下传递
import store from './store/index.js';

// import App from './App';

import { storeContext } from './connect/context';

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({ type: 'send_type', count: 0 });

ReactDOM.render(
  <storeContext.Provider value={store}>
    {/* <App /> */}
  </storeContext.Provider>,
  document.getElementById('root')
);
