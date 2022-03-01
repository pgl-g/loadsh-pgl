import React, { useState, useCallback, memo } from 'react';




const Child = memo(({state, onClick}) => {

  console.log('子组件被调用');
  return (
    <div onClick={onClick}>
      我是子函数:{state}
    </div>
  )
})

const _UseCallback = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('张三');


  // 每次父组件渲染，返回的是同一个函数引用（第二个依赖是一个空数组，后续的渲染，只会记住第一次的渲染）
  const handleChange = useCallback(() => {
    setName('李四');
  }, [])

//   const handleCount = useCallback(() => {
//     setCount(count + 1)
//   }, [count]
// )
  const handleCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>点击事件</button>
      <Child state={name} onClick={handleChange} />
    </div>
  )
}






export default _UseCallback;