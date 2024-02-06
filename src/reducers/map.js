import { GET_MAP_CENTRES, MAP_CENTRES_ERROR } from '../actions/types';

const initialState = {
    mapcentre: null,
    mapcentres: [],
    loading: true,
    error: {}
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case MAP_CENTRES_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            };
        case GET_MAP_CENTRES:
            return {
                ...state,
                mapcentres: payload,
                loading: false,
            };
        default:
            return state;
    }
};