import React, {useState, useMemo} from 'react';




const _UseMemo = () => {


  const [count, setCount] = useState(0);
  const [name, setName] = useState('张三');
  
  // 在没用useMemo之前，修改点击事件会重新渲染dom，但是不该渲染的名称由于dom的更新重新调用了
  // const getName = () => {
  //   console.log('调用了')
  //   return name;
  // }

  
  const getName = useMemo(() => {
    console.log('调用了')
    return name;
  }, [name]) // 只监听name这个值是否被调用了？ 

  return (
    <div>
      <p>{count}</p>
      <p>{getName}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setName('李四')}>修改名称</button>
    </div>
  )
}

export default _UseMemo;