

import React from 'react';

import { connect } from 'react-redux';

class ComA extends React.Component {

  

  handleClick = () => {
    console.log(this.props);
    // 发送
    // this.props.();
    const action = {
      type: 'add_action'
    }

    this.props.dispatch(action);

  }


  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    )
  }
}

// /**
//  * 
//  * @param {*} dispatch 
//  */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendAction:() => {
//       // 利用dispatch发送一个action
//       dispatch({
//         type: 'add_action'
//       })
//     }
//   }
// }


export default connect(state => ({
  state
}))(ComA)