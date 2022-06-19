

import React from 'react';


// 子组件
class Child extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(nextProps);
  //   if (nextProps.name !== this.props.name) {
  //     return true;
  //   }
  //   return false;
  // }


  render() {
    console.log('我是子组件')
    return (
      <div>
       我是子组件 {this.props.name}
      </div>
    )
  }
}

class App extends React.Component {


  state = {
    count: 1
  }



  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  callback = () => {
    
  }


  render() {
    console.log('我是父组件')
    return (
      <div>
        {this.state.count}
        <Child cb={this.callback} />
        <button onClick={this.handleClick}>add</button>
      </div>
    )
  }

}

export default App;