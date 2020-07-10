export const clickReducer = (state = {msg: ''}, action) => {
  switch (action.type) {
    case 'CLICK_HELLO':
      // Atualização... Evolução do state
      // Pega o state e atualiza o valor msg dentro dele
      return { ...state, msg: action.msg }
    default:
      return state
  }
}