const getAllstatCardsAction = () => dispatch => {
    //Here we'll make a call to our database that will retrieve all of our stat cards
    dispatch({
        type: "getAllStatCards",
        payload: {}
    })
}

export default getAllstatCardsAction