import {
  CREATE_CARD,
  EDIT_CARD,
  DELETE_CARD } from './../constants/ActionTypes'

import uuid from 'uuid'

const createCard = (text) => {
  return {
    type: CREATE_CARD,
    payload: {
      id: uuid.v4(),
      edit: false,
      text: text
    }
  }
}

const editCard = (edited) => {
  return {
    type: EDIT_CARD,
    payload: edited
  }
}

const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: { id }
  }
}



export default {
  createCard,
  editCard,
  deleteCard
}