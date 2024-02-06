import axios from "axios";
import { url } from "../utils/api";
import { setToast } from "./toast";
import { ADD_RESCUE, DELETE_RESCUE, GET_ALL_RESCUES, RESCUE_ERROR } from './types';


// Get Rescued
export const getAllRescues = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/rescued/all`, config);

        dispatch({
            type: GET_ALL_RESCUES,
            payload: res.data
        });
        
    } catch (err) {
        dispatch({
            type: RESCUE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}


// // Add Rescued Person 
// export const addRescued = (formData, navigate) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }
//     try {
//         const res = await axios.post(`${url}/api/rescued/new`, formData, config);

//         dispatch({
//             type: ADD_RESCUE,
//             payload: res.data
//         });
//         dispatch(setToast('Added a Rescued Person', 'success'));
//         navigate('/dashboard/rescues');
//     } catch (err) {
//         dispatch({
//             type: RESCUE_ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status}
//         });
//     }
// }

// Add Centre
export const addRescued = (formData, navigate) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.post(`${url}/api/rescued/new`, formData, config);

        dispatch({
            type: ADD_RESCUE,
            payload: res.data
        });
        
        dispatch(setToast('Added a new centre', 'success'));
        navigate('/dashboard/rescues');
    } catch (err) {
        dispatch({
            type: RESCUE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Delete Rescued Person
export const deleteRescued = _id => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        await axios.delete(`${url}/api/rescued/${_id}`, config);

        dispatch({
            type: DELETE_RESCUE,
            payload: _id
        });
        dispatch(setToast('Deleted a rescued person', 'success'));
    } catch (err) {
        dispatch({
            type: RESCUE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}


export const editRescued = (_id, formData, navigate) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        await axios.put(`${url}/api/rescued/edit/${_id}`, formData, config);

        // dispatch({
        //     type: EDIT_RESCUE,
        //     payload: { _id, updatedRescueData: res.data }
        // });
        dispatch(getAllRescues());
        dispatch(setToast('Edited Rescue Information', 'success'));
        navigate('/dashboard/rescues');
    } catch (err) {
        dispatch({
            type: RESCUE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}