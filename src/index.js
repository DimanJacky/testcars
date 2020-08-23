import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

const loggerMiddleware = store => next => action => {
    const result = next(action)
    console.log('Middlware', store.getState())
    return result
}

const store = createStore(rootReducer, applyMiddleware(
    loggerMiddleware,
    reduxThunk
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)