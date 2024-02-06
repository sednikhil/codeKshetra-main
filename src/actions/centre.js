import axios from "axios";
import { url } from "../utils/api";
import { setToast } from "./toast";
import { ADD_CENTRE, CENTRE_ERROR, DELETE_CENTRE, EDIT_CENTRE, GET_CENTRES } from './types';

// Get all centres
export const getCentres = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/centre/all`, config);

        dispatch({
            type: GET_CENTRES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: CENTRE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}


// Add Centre
export const addCentre = (formData, navigate) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.post(`${url}/api/centre/new`, formData, config);

        dispatch({
            type: ADD_CENTRE,
            payload: res.data
        });

        
        dispatch(setToast('Added a new centre', 'success'));
        navigate('/dashboard/centres');
    } catch (err) {
        dispatch({
            type: CENTRE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Edit Centre
export const editCentre = (id, formData, navigate) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.put(`${url}/api/centre/edit/${id}`, formData, config);

        dispatch({
            type: EDIT_CENTRE,
            payload: res.data
        });

        
        dispatch(setToast('Updated centre details', 'success'));
        dispatch(getCentres());
        navigate('/dashboard/centres');
    } catch (err) {
        dispatch({
            type: CENTRE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Delete Centre
export const deleteCentre = _id => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(window.confirm('Are you sure about DELETING CENTRE? This can NOT be undone!')) {
        try {
            await axios.delete(`${url}/api/centre/${_id}`, config);

            dispatch({
                type: DELETE_CENTRE,
                payload: _id
            });
            dispatch(setToast('Deleted a centre', 'success'));
        } catch (err) {
            dispatch({
                type: CENTRE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status}
            });
        }
    }
}