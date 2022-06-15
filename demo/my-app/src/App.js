import { useEffect, useState } from 'react';
import './App.css';
import Hooks from './自定义hooks';

function App() {

  const [count, setCount] = useState(0);


  useEffect(() => {
  }, [])

  const handleChange = () => {
    // console.log(12)
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={handleChange}>
        点击
      </button>

      <Hooks />
      {/* <Children props={count} /> */}
    </div>
  );
}


const Children = ({ props }) => {
  console.log(props)

  return (
    <div>
      xxx
    </div>
  )
}

export default App;
