import React, { useEffect, useState, useLayoutEffect } from 'react';

// import { connect } from 'react-redux';

// 导入store
import { store } from '../../store';

// 导入action构建函数
import { sendAction } from '../../action';


// 测试useEffect / useLayoutEffect 区别
const UseEffectDemo = () => {

  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count === 0) {
      // const randomNum = 10 + Math.random()*200
      setCount(10 + Math.random()*200);
    }
  }, [count])
  
  return (
    <div onClick={() => setCount(0)}>{count}</div>
  )
}

export default class Home extends React.Component {


  handleClick = () => {
     const action = sendAction();
    // 发送一个action 利用store
    store.dispatch(action);
  }



  // 当组件一加载完毕的时候 来监听
  componentDidMount() {
    store.subscribe(() => {
      console.log('监听：', store.getState());
      this.setState({})
    })
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>点我点我</button>
        <div>{store.getState().value}</div>
        <UseEffectDemo />
      </>
    )
  }
}

// connect(Home)({})