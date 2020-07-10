import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Card from './CardReducers'
import Panel from './PanelReducers'

export const reducers = (history) => combineReducers({
  router: connectRouter(history),
  cards: Card,
  panels: Panel
})
