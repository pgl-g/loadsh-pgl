import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; // 全局化的管理组件,使所有子组件都可以拿到state, 接收state作为props，然后通过context往下传递
import { store } from './store';

import App from './App';




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
