import axios from "axios";
import { url } from "../utils/api";
import { setToast } from "./toast";
import { ADD_HELPLINE, DELETE_HELPLINE, GET_ALL_HELPLINES, HELPLINE_ERROR } from './types';

// Get Helpline
export const getAllHelplines = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/helpline/all`, config);
        // console.log(res.data);

        dispatch({
            type: GET_ALL_HELPLINES,
            payload: res.data
        });
        
    } catch (err) {
        dispatch({
            type: HELPLINE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}


// Add Helpline
export const addHelpline = (formData, navigate) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.post(`${url}/api/helpline/new`, formData, config);

        dispatch({
            type: ADD_HELPLINE,
            payload: res.data
        });
        dispatch(setToast('Added a new helpline', 'success'));
        navigate('/dashboard/helplines');
    } catch (err) {
        dispatch({
            type: HELPLINE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Delete Helpline
export const deleteHelpline = _id => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        await axios.delete(`${url}/api/helpline/${_id}`, config);

        dispatch({
            type: DELETE_HELPLINE,
            payload: _id
        });
        // dispatch(getAllHelplines());
        dispatch(setToast('Deleted a helpline', 'success'));
    } catch (err) {
        dispatch({
            type: HELPLINE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}