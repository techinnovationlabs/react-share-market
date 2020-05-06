const initialState = {
    shareMarketList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Fetch_Details':
            return {
                shareMarketList: action.payload
            };
        default:
            return state;
    }
}

export default reducer;