import { combineReducers } from "redux";

const jobDetails = (state = {}, action = {}) => {
    switch (action.type) {
        case "GET_JOB_DETAILS":
            return action.data
        default:
            return state
    }
}

const reducer = combineReducers({ jobDetails });
export default reducer;