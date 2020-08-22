import React, {Component} from 'react';
import Car from "./Car";

class Cars extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {cars} = this.props

        return (
            <>
                {cars.map((car, i) => <Car key={i} name={car.name} year={car.year} />)}
            </>
        )
    }
}

export default Cars
