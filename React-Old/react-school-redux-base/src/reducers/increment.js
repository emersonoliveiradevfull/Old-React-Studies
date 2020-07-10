import { INCREMENT_NUMBER } from './../actions/actionTypes'

export const incrementReducer  = (state = { number: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return { ...state, number: action.number }
    default:
      return state
  }
}