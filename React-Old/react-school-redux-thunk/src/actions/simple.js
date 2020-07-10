export default function simpleAction() {
  console.log("Hello from action")
  return (dispatch) => {
    dispatch({
      type: 'ACTION_1',
      payload: { msg: 'Hello thunk'}
    })
  }
}