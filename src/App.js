import React, {Component} from 'react';
import Cars from "./Cars";
import {connect} from 'react-redux'
import {add, sub} from "./redux/actions/actions";

class App extends Component {

  render() {

      if (this.props.counterDiva == 210) alert('210');

    return (
        <div className="App">
          <h3>Counter {this.props.counter}</h3>
          <div>
            <button onClick={this.props.onAdd}>Add</button>
            <button onClick={this.props.onSub}>Sub</button>
          </div>
          <Cars cars = {this.props.cars} />
        </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter,
    cars: state.cars.cars,
    counterDiva: state.counter2.counter2
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
