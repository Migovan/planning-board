import { createStore, applyMiddleware, combineReducers } from 'redux'
import  *as reducers from '../reducers'
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

const store = createStore(combineReducers(reducers), applyMiddleware(logger, thunk));

export default store