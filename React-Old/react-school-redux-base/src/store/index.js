import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Reducers } from './../reducers'

export const Store = createStore(Reducers, applyMiddleware(ReduxThunk))