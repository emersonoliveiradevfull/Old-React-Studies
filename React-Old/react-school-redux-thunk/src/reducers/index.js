import { combineReducers } from 'redux'
import simpleReducer from './simple'
import { isFetching, fetchedError, fetched } from "../reducers/app";

export default combineReducers({
  simpleReducer,
  isFetching,
  fetched,
  fetchedError
})