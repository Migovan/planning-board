import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import  *as reducers from './reducers'
import thunk from 'redux-thunk'

const logger = (store) => (next) => (action) => {
  let previous = JSON.stringify(store.getState())
  next(action)
  console.log(
    'action: ' + JSON.stringify(action) +
    '\n\tprevious: ' + previous +
    '\n\tcurrent: ' + JSON.stringify(store.getState())
  )
}

const store = createStore(combineReducers(reducers), applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)

