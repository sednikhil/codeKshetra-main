import { ADD_STAFF, CHANGE_STAFF_CENTRE, CLEAR_STAFF, DELETE_STAFF, GET_STAFFS, STAFF_ERROR } from '../actions/types';

const initialState = {
    staff: null,
    staffs: [],
    loading: true,
    error: {}
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case STAFF_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            };

        case ADD_STAFF:
            return {
                ...state,
                staffs: [payload, ...state.staffs],
                loading: false
            };
        case CHANGE_STAFF_CENTRE:
            return {
                ...state,
                staffs: state.staffs.map(staff => staff._id === payload.staff_id ? { ...staff, centreid: payload.new_centre_id } : staff),
                loading: false,
            };
        case GET_STAFFS:
            return {
                ...state,
                staffs: payload,
                loading: false,
            };
        case CLEAR_STAFF:
            return {
                ...state,
                staff: null,
                staffs: null,
                loading: false
            };
        case DELETE_STAFF:
            return {
                ...state,
                staffs: state.staffs.filter(staff => staff._id !== payload),
                loading: false
            };
        default:
            return state;
    }
};