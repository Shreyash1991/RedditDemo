import { RESPONSE_REDDITS, ERROR_REDDITS } from '../actions';

const INITIAL_REDDIT_STATE = {
    reddits: [],
    error: {
        msg: "Something went wrong!!!",
        isError: false
    }
}
const reducer = (state = INITIAL_REDDIT_STATE, action) => {
    switch (action.type) {
        case RESPONSE_REDDITS:
            return {
                ...state,
                reddits: {
                    data: action.data,
                    error: {
                        ...state.error,
                        isError: false
                    }
                }
            };
        default:
            return state;
    }
};
export default reducer;