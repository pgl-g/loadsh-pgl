import React, { useRef } from 'react'
import useScroll from './useScroll'

const Home = (props) => { 
  const scrollRef = useRef(null) 
  const [x, y] = useScroll(scrollRef) 
  return <div> <div ref={scrollRef}> <div className="innerBox"></div> </div> <div>{ x }, { y }</div> </div>
}

export default Home