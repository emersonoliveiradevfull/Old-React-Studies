import {
  CREATE_PANEL,
  EDIT_PANEL,
  DELETE_PANEL, MOVE_PANEL
} from "./../constants/ActionTypes"

import update from 'react-addons-update'



export default function panels(state = [], action) {
  switch (action.type) {
    case CREATE_PANEL:
      return [...state, action.payload]
    case EDIT_PANEL:
      return state.map(panel => {
        if(action.payload.id === panel.id) {
          return Object.assign({}, panel, action.payload)
        }
        return panel
      })
    case DELETE_PANEL:
      return state.filter( panel => action.payload.id !== panel.id)
    case MOVE_PANEL:
      const targetIndex = state.findIndex(panel => panel.id ===  action.payload.id)
      const monitorIndex = state.findIndex(panel => panel.id === action.payload.monitorId)

      return update(state, {
        $splice: [
          [monitorIndex, 1],
          [targetIndex, 0, state.find(panel => panel.id === action.payload.monitorId)]
        ]
      })
    default:
      return state
  }
}