

// import React from 'react';


// // 子组件
// class Child extends React.PureComponent {

//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   // console.log(nextProps);
//   //   if (nextProps.name !== this.props.name) {
//   //     return true;
//   //   }
//   //   return false;
//   // }


//   render() {
//     console.log('我是子组件')
//     return (
//       <div>
//        我是子组件 {this.props.name}
//       </div>
//     )
//   }
// }

// class App extends React.Component {


//   state = {
//     count: 1
//   }



//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   componentDidMount() {
//       this.setState({
//         count: this.state.count + 1
//       })
//       console.log(this.state.count, '000同步')
//   }

//   callback = () => {

//   }


//   render() {
//     console.log('我是父组件')
//     return (
//       <div>
//         {this.state.count} 父组件
//         <Child cb={this.callback} />
//         <button onClick={this.handleClick}>add</button>
//       </div>
//     )
//   }

// }

// export default App;


import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';

const App = () => {

  const childRef = useRef();



  const handleClick = () => {
    childRef.current.onChangeClick(1)
  }

  return (
    <div>
      父组件

      <hr />

      <button onClick={handleClick}>点击</button>

      <Child ref={childRef} />
    </div>
  )
}


const Child = forwardRef((props, ref) => {


  useImperativeHandle(ref, () => ({
    onChangeClick(val) {
      console.log(val)
    }
  }))

  return (
    <div>
      子组件
    </div>
  )
})


export default App;
