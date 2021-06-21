import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './App'
 import Reducers from './Reducers'

//from github profile for redux dev tool https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(Reducers, composeEnhancers(applyMiddleware(reduxThunk)));
ReactDOM.render(
  <Provider store={store}>
        <App />
</Provider>
   , document.querySelector('#root')
);