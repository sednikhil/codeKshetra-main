import { ADD_HELPLINE, DELETE_HELPLINE, GET_ALL_HELPLINES, HELPLINE_ERROR } from '../actions/types';

const initialState = {
    helpline: null,
    helplines: [],
    loading: true,
    error: {}
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case HELPLINE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            };

        case ADD_HELPLINE:
            return {
                ...state,
                helplines: [payload, ...state.helplines],
                loading: false
            };
        case GET_ALL_HELPLINES:
            return {
                ...state,
                helplines: payload,
                loading: false,
            };
        case DELETE_HELPLINE:
            return {
                ...state,
                helplines: state.helplines.filter(helpline => helpline._id !== payload),
                loading: false
            };
        default:
            return state;
    }
};
