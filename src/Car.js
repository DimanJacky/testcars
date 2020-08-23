import React, {Component} from 'react';
import {connect} from 'react-redux'
import {add2} from "./redux/actions/actions";

class Car extends Component {

    render() {
        console.log(this.props)
        const {name, year} = this.props

        return (
            <div>
                {name} {year} {this.props.counterTwo}
                <button onClick={() => this.props.onAdd2(18)}>Add</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counterTwo: state.counter2.counter2,
        counterone: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd2: (number) => dispatch(add2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)
