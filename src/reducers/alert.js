import { ADD_ALERT, ALERT_ERROR, CHANGE_ALERT_STATUS, DELETE_ALERT, GET_ALERTS, GET_HEAD_ALERT, REMOVE_HEAD_ALERT, SET_HEAD_ALERT } from '../actions/types';

const initialState = {
    headalert: null,
    alerts: [],
    loading: true,
    error: {}
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ALERT_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            };

        case ADD_ALERT:
            return {
                ...state,
                alerts: [payload, ...state.alerts],
                loading: false
            };
        case SET_HEAD_ALERT:
            return {
                ...state,
                headalert: payload,
                loading: false
            };
        case GET_HEAD_ALERT:
            return {
                ...state,
                headalert: payload,
                loading: false
            };
        case REMOVE_HEAD_ALERT:
            return {
                ...state,
                headalert: null,
                loading: false
            };
        case CHANGE_ALERT_STATUS:
            return {
                ...state,
                alerts: state.alerts.map(alert => alert._id === payload.id ? { ...alert, status: payload.status } : alert),
                loading: false,
            };
        case GET_ALERTS:
            return {
                ...state,
                alerts: payload,
                loading: false,
            };
        case DELETE_ALERT:
            return {
                ...state,
                alerts: state.alerts.filter(alert => alert._id !== payload),
                loading: false
            };
        default:
            return state;
    }
};