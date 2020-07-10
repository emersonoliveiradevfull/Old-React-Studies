export default (
    state = {},
    action
) => {
    switch (action.type) {
        case "addStateCard":
            console.log("Adding", action.payload);
            return state
        case "getAllStatCards":
            console.log("getting", action.payload)
            return {
                ...state,
                statCardState:
                Object.values(
                    action.payload
                )
            }
        default:
            return state

    }
}