import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

export default () => {
  const enchanters = applyMiddleware(thunk)

  return createStore(
    rootReducer,
    enchanters
  )
}