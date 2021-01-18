
import * as actions from '../actions/actionTypes';

const initialState = {
    list: [],
    error: false,
    result: false,
    response: false
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case (actions.UPDATE_NOMINATION_LIST):
            return {
                ...state,
                list: action.list
            };
        case (actions.NOMINATE_MOVIES_FAIL):
            return {
                ...state,
                error: true,
                response: false
            };
        case (actions.NOMINATE_MOVIES_SUCCESS):
            return {
                ...state,
                error: false,
                response: true
            };
        case(actions.FETCH_NOMINATION_SUCCESS):
        return{
            ...state,
            error:false,
            list:action.list
        }

        default:
            return state;
    }
};


export default reducer;