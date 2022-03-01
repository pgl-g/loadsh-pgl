
import React, { useState, useEffect } from 'react';
// import { useToggle } from 'ahooks';


const Home = () => {
  
  const [test, setTest] = useState({ name: '小明', age: '18' });
  const init = () => {
    setTest({ name: '小红', age: '16' });
  };
  useEffect(() => {
    init();
    console.log('kkk', test);
  }, [JSON.stringify(test)]);


  return (
    <div>
      <p>{test.name}</p>

      <button type='button'>changeFlag</button>
    </div>
  )
}

export default Home;