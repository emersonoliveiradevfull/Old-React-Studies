//import ReduxThunk from 'redux-thunk'
//import { createStore, applyMiddleware} from  'redux'
import { createStore, applyMiddleware } from  'redux'
import { reducers } from './../reducers/index'
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from 'history'

const history  = createBrowserHistory()
const middlewares = routerMiddleware(history)

export const Store = (createStore(reducers(history), applyMiddleware(middlewares)))
export const History = history
//export const Store = createStore(Reducers, applyMiddleware(ReduxThunk))