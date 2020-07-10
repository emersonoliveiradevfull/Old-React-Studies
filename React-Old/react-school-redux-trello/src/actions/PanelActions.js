import {
  CREATE_PANEL,
  EDIT_PANEL,
  DELETE_PANEL,
  MOVE_PANEL
} from "../constants/ActionTypes";

import uuid from 'uuid'

const createPanel = (text) => {
  return {
    type: CREATE_PANEL,
    payload: {
      id: uuid.v4(),
      text: text,
      cards: []
    }
  }
}

const editPanel = (edited) => {
  return {
    type: EDIT_PANEL,
    payload: edited
  }
}

const deletePanel = (id) => {
  return {
    type: DELETE_PANEL,
    payload: { id }
  }
}

const move = (id, monitorId) => {
  return {
    type: MOVE_PANEL,
    payload: {
      id,
      monitorId
    }
  }
}

export default {
  createPanel,
  editPanel,
  deletePanel,
  move
}