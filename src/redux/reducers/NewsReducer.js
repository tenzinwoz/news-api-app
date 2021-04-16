const initialState = {
    news: []
}

const NewsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_ALL_NEWS":
            return { ...state, news: payload }
        default:
            return state
    }
}

export default NewsReducer;

//Api key : 1249a8c542694ea184e2b971765647e3