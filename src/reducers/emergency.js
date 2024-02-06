import { ADD_EMERGENCY, CLEAR_EMERGENCIES, DELETE_EMERGENCY, EMERGENCY_ERROR, GET_EMERGENCIES, UPDATE_EMERGENCY } from '../actions/types';

const initialState = {
    emergency: null,
    emergencies: [],
    loading: true,
    error: {}
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case EMERGENCY_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            };

        case ADD_EMERGENCY:
            return {
                ...state,
                emergencies: [payload, ...state.emergencies],
                loading: false
            };
        case UPDATE_EMERGENCY:
            return {
                ...state,
                emergencies: state.emergencies.map(emergency => emergency._id === payload.id ? { ...emergency, resolved: payload.resolved } : emergency),
                loading: false,
            };
        case GET_EMERGENCIES:
            return {
                ...state,
                emergencies: payload,
                loading: false,
            };
        case CLEAR_EMERGENCIES:
            return {
                ...state,
                emergency: null,
                emergencies: null,
                loading: false,
            };
        case DELETE_EMERGENCY:
            return {
                ...state,
                emergencies: state.emergencies.filter(emergency => emergency._id !== payload),
                loading: false
            };
        default:
            return state;
    }
};