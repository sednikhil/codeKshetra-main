import { ADD_RESCUE, CLEAR_RESCUES, DELETE_RESCUE, GET_ALL_RESCUES, RESCUE_ERROR } from '../actions/types';

const initialState = {
    rescue: null,
    rescued: [],
    loading: true,
    error: {}
}

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case RESCUE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            };

        case ADD_RESCUE:
            return {
                ...state,
                rescued: [payload, ...state.rescued],
                loading: false
            };
        
        case GET_ALL_RESCUES:
            return {
                ...state,
                rescued: payload,
                loading: false,
            };
        case CLEAR_RESCUES:
            return {
                ...state,
                rescue: null,
                rescued: [],
                loading: false,
            };
        case DELETE_RESCUE:
            return {
                ...state,
                rescued: state.rescued.filter(rescue => rescue._id !== payload),
                loading: false
            };
        
        // case EDIT_RESCUE:
        //     const updatedRescues = state.rescued.map(rescue => {
        //         if (rescue._id === payload._id) {

        //             // Update the rescue that matches the payload
        //             return { ...rescue, ...payload.updatedRescueData };
        //         } else {
        //             return rescue;
        //         }
        //     });

        //     return {
        //         ...state,
        //         rescued: updatedRescues,
        //         loading: false
        //     };
        
        default:
            return state;
            
    }
}