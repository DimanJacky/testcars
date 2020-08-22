import React, {Component} from 'react';
import Cars from "./Cars";

class App extends Component {

  state = {
    cars: [
      {name: 'ford', year: '2016'},
      {name: 'audi', year: '2018'},
      {name: 'mazda', year: '2019'},
    ]
  }

  render() {
    return (
        <div className="App">
          <Cars cars = {this.state.cars} />
        </div>
    )
  }

}

export default App;
