import React, { useState, memo, useCallback} from 'react';



const Child = memo((onCb) => {


  console.log('子组件')

  return (
    <div onClick={onCb}>
      子组件
    </div>
  )
})



const Parents = () => {

  const [ count, setCount ] = useState(0);


  const handleClick = () => {
    setCount(() => count + 1);
  } 



  const childClick = useCallback(() => {
    setCount(() => count + 1);
  }, [])

  console.log('父组件',)

  return (
    <div>
      父组件 { count }
      <Child onCb={childClick} />
      <button onClick={handleClick}>点击</button>
    </div>
  )
}




export default Parents;
