const addStatCardAction = (
    statname,
    statDescription,
    statIcon,
    statIconColor,
    statFooterIcon,
    statFooterIconState,
    statFooterPercentage,
    statFooterText,
) => async  dispatch => {
    //Here we'll make a call to our database to add our new stat card with the above details
    dispatch({
        type: "addStatCard",
        payload: {
            statname: statname,
            statDescription: statDescription,
            statIcon: statIcon,
            statIconColor: statIconColor,
            statFooterIcon: statFooterIcon,
            statFooterIconState: statFooterIconState,
            statFooterPercentage: statFooterPercentage,
            statFooterText: statFooterText,
        }
    })
}

export default  addStatCardAction



