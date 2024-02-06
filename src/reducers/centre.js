import { ADD_CENTRE, CENTRE_ERROR, CLEAR_CENTRES, DELETE_CENTRE, GET_CENTRES, GET_CENTRE_BY_ID } from '../actions/types';

const initialState = {
    centre: null,
    centres: [],
    loading: true,
    error: {}
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case CENTRE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            };

        case ADD_CENTRE:
            return {
                ...state,
                centres: [payload, ...state.centres],
                loading: false
            };
        // case EDIT_CENTRE:
        //     return {
        //         ...state,
        //         centres: [payload, ...state.centres],
        //         loading: false
        //     };
        case GET_CENTRES:
            return {
                ...state,
                centres: payload,
                loading: false,
            };
        case GET_CENTRE_BY_ID:
            return {
                ...state,
                centre: payload,
                loading: false,
            };
        case CLEAR_CENTRES:
            return {
                ...state,
                centre: null,
                centres: null,
                loading: false,
            };
        case DELETE_CENTRE:
            return {
                ...state,
                centres: state.centres.filter(centre => centre._id !== payload),
                loading: false
            };
        default:
            return state;
    }
};