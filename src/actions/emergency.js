import axios from "axios";
import { url } from "../utils/api";
import { getCentres } from "./centre";
import { setToast } from "./toast";
import { ADD_EMERGENCY, DELETE_EMERGENCY, EMERGENCY_ERROR, GET_EMERGENCIES, GET_MY_EMERGENCIES } from './types';

// Get my emergencys
export const getMyEmergencies = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/centre/emergencys/me`, config);

        dispatch({
            type: GET_MY_EMERGENCIES,
            payload: res.data
        });
        
    } catch (err) {
        dispatch({
            type: EMERGENCY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Get emergencys
export const getEmergencies = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/centre/emergency/all`, config);

        dispatch({
            type: GET_EMERGENCIES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: EMERGENCY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Resolve Emergency
export const changeStatusEmergency = (centreid, emergencyid) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        await axios.put(`${url}/api/centre/${centreid}/emergency/${emergencyid}/changeStatus`, config);

        // dispatch({
        //     type: UPDATE_EMERGENCY,
        //     payload: {id, resolved: res.data}
        // });
        dispatch(setToast('Updated an emergency status', 'success'));
        
        dispatch(getEmergencies());
        dispatch(getCentres());
    } catch (err) {
        dispatch({
            type: EMERGENCY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}


// Add Emergency
export const addEmergency = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.post(`${url}/api/emergency`, formData, config);

        dispatch({
            type: ADD_EMERGENCY,
            payload: res.data
        });
        dispatch(setToast('Added a new emergency', 'success'));
    } catch (err) {
        dispatch({
            type: EMERGENCY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Delete Emergency
export const deleteEmergency = _id => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        await axios.delete(`${url}/api/emergency/${_id}`, config);

        dispatch({
            type: DELETE_EMERGENCY,
            payload: _id
        });
        dispatch(setToast('Deleted an emergency', 'success'));
    } catch (err) {
        dispatch({
            type: EMERGENCY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}