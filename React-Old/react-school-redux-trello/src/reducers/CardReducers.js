import {
  CREATE_CARD,
  EDIT_CARD,
  DELETE_CARD } from './../constants/ActionTypes'

export default function cards(state = [], action) {
  switch (action.type) {
    case CREATE_CARD:
      return [...state, action.payload]
    break
    case EDIT_CARD:
      return state.map(card => {
        if(action.payload.id === card.id)
          return Object.assign({}, card, action.payload)
        return card
      })
    break
    case DELETE_CARD:
      return state.filter( card => card.id !== action.payload.id)
    break
    default:
      return state
  }
}