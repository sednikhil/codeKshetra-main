import { CLEAR_GUESTS, GET_GUESTS, GUEST_ERROR } from '../actions/types';

const initialState = {
    guest: null,
    guests: [],
    loading: true,
    error: {}
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GUEST_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            };
        case GET_GUESTS:
            return {
                ...state,
                guests: payload,
                loading: false,
            };
        case CLEAR_GUESTS:
            return {
                ...state,
                guest: null,
                guests: [],
                loading: false,
            };
        default:
            return state;
    }
};