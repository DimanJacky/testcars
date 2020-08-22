import React, {Component} from 'react';

class Car extends Component {

    render() {

        const {name, year} = this.props

        return (
            <div>{name} {year}</div>
        )
    }
}

export default Car
