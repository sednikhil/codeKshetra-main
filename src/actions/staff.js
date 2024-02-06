import axios from "axios";
import { url } from "../utils/api";
import { setToast } from "./toast";
import { ADD_STAFF, CHANGE_STAFF_CENTRE, DELETE_STAFF, GET_STAFFS, STAFF_ERROR } from './types';

// Get staff
export const getStaffs = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/staff/all`, config);

        dispatch({
            type: GET_STAFFS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: STAFF_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Add Staff
export const addStaff = (formData, navigate) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.post(`${url}/api/staff/register`, formData, config);

        dispatch({
            type: ADD_STAFF,
            payload: res.data
        });

        
        dispatch(setToast('Added a new staff', 'success'));
        navigate('/dashboard/staffs');
    } catch (err) {
        
        dispatch({
            type: STAFF_ERROR,
            payload: { msg: err.msg, status: err.response.status}
        });
    }
}

// Change staff centre
export const changeStaffCentre = (staff_id, new_centre_id, navigate) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const res = await axios.put(`${url}/api/staff/changeCentre/${staff_id}/${new_centre_id}`, config);
        // console.log(res.data);
        dispatch({
            type: CHANGE_STAFF_CENTRE,
            payload: {staff_id, new_centre_id}
        });
        dispatch(setToast('Updated center of staff', 'success'));
        // dispatch(getStaffs());
        navigate('/dashboard/staffs');
    } catch (err) {
        dispatch({
            type: STAFF_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Delete Staff
export const deleteStaff = (_id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if(window.confirm('Are you sure about DELETING STAFF? This can NOT be undone!')) {
        try {
            await axios.delete(`${url}/api/staff/${_id}`, config);

            dispatch({
                type: DELETE_STAFF,
                payload: _id
            });
            dispatch(getStaffs());
            dispatch(setToast('Deleted a staff', 'success'));
        } catch (err) {
            // console.log(err);
            dispatch({
                type: STAFF_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status}
            });
        }
    }
}