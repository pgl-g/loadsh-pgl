
import React, { PureComponent } from 'react';

// import store from '../store';
import { storeContext } from './context';

// 封装connect
export function connect(mapStateToProps, mapDispathToProps) {
  return function hoc(Components) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);
        

        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }


      componentDidMount() {
        this.unsubscript = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscript();
      }

      render() {
        return <Components {...this.props} {...mapStateToProps(this.context.getState())} {...mapDispathToProps(this.context.dispatch)} />
      }
    }


    EnhanceComponent.contextType = storeContext;
  }
}



const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};
const mapDispathToProps = (dispatch) => {
  return {
    // 这个是“组件中的方法进行调用”
    decrement: function() {
      dispatch(decrement(5));
    }
  }
};

connect(mapStateToProps, mapDispathToProps)(组件);
