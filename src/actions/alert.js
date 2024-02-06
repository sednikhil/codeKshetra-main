import axios from "axios";
import { url } from "../utils/api";
import { setToast } from "./toast";
import { ADD_ALERT, ALERT_ERROR, CHANGE_ALERT_STATUS, DELETE_ALERT, GET_ALERTS, GET_HEAD_ALERT, REMOVE_HEAD_ALERT, SET_HEAD_ALERT } from './types';

// Get alert
export const getAlerts = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/alert/all`, config);

        dispatch({
            type: GET_ALERTS,
            payload: res.data
        });
        dispatch(getHeadAlert());
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// get headalert
export const getHeadAlert = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/alert/head/`, config);

        dispatch({
            type: GET_HEAD_ALERT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// set headalert
export const setHeadAlert = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.put(`${url}/api/alert/setheading/${id}`, config);

        dispatch({
            type: SET_HEAD_ALERT,
            payload: res.data
        });
        dispatch(getAlerts());
        dispatch(setToast('Set head alert', 'success'));
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Add Alert
export const addAlert = (formData, navigate) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.post(`${url}/api/alert/new`, formData, config);

        dispatch({
            type: ADD_ALERT,
            payload: res.data
        });

        
        dispatch(setToast('Added a new alert', 'success'));
        navigate('/dashboard/alerts');
    } catch (err) {
        
        dispatch({
            type: ALERT_ERROR,
            payload: { msg: err.msg, status: err.response.status}
        });
    }
}

// Change alert status
export const changeAlertStatus = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const res = await axios.put(`${url}/api/alert/change/${id}`, config);

        dispatch({
            type: CHANGE_ALERT_STATUS,
            payload: {id, status: res.data}
        });
        dispatch(setToast('Updated an alert status', 'success'));
        
        dispatch(getAlerts());
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Remove headalert
export const removeHeadAlert = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        await axios.put(`${url}/api/alert/removeheading/${id}`, config);

        dispatch({
            type: REMOVE_HEAD_ALERT,
            payload: id
        });
        dispatch(setToast('Removed the head alert', 'success'));
        dispatch(getAlerts());
    } catch (err) {
        dispatch({
            type: ALERT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Delete Alert
export const deleteAlert = (_id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(window.confirm('Are you sure about DELETING ALERT? This can NOT be undone!')) {
        try {
            await axios.delete(`${url}/api/alert/${_id}`, config);

            dispatch({
                type: DELETE_ALERT,
                payload: _id
            });
            dispatch(getAlerts());
            dispatch(setToast('Deleted an alert', 'success'));
        } catch (err) {
            // console.log(err);
            dispatch({
                type: ALERT_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status}
            });
        }
    }
}