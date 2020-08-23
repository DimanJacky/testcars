import {ADD, ADD_NUMBER, SUB} from "../actions/actionTypes";

const initialState = {
    counter: 5
}

export default function counter1(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case ADD_NUMBER:
            return {
                counter: state.counter + action.payload
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}