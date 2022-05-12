
import { PureComponent } from 'react';

import store from '../store';

// 封装connect
export function connect(mapStateToProps, mapDispathToProps) {
  return function hoc(Components) {
    return class extends PureComponent {
      constructor(props) {
        super(props);
        

        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }


      componentDidMount() {
        this.unsubscript = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscript();
      }

      render() {
        return <Components {...this.props} {...mapStateToProps(store.getState())} {...mapDispathToProps(store.dispatch)} />
      }
    }
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
