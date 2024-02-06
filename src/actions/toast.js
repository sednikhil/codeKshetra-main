import { v4 as uuidv4 } from 'uuid';
import { REMOVE_TOAST, SET_TOAST } from './types';

export const setToast = (msg, alertType, timeout = 4000) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: SET_TOAST,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_TOAST, payload: id }), timeout);
};