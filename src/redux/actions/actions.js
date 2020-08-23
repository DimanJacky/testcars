import {ADD, SUB, ADD2} from "./actionTypes";

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function add2(number) {
    return {
        type: ADD2,
        param: number
    }
}