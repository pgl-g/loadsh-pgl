

import React from 'react';
import { connect } from 'react-redux';

class ComB extends React.Component {



  render() {
    console.log(this.props);
    return (
      <div>{this.props.state.count}</div>
    )
  }
}

export default connect(state => ({
  state
}))(ComB)