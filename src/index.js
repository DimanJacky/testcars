import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)