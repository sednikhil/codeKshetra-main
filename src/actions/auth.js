import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setToast } from './toast';
import {
    AUTH_ERROR,
    CLEAR_CENTRES,
    CLEAR_COMPLAINTS,
    CLEAR_EMERGENCIES,
    CLEAR_GUESTS,
    CLEAR_RESCUES,
    CLEAR_STAFF,
    LOGIN_FAIL,
    LOGIN_SUCCESS, LOGOUT,
    USER_LOADED,
    USER_RELOADED
} from './types';

import { url } from '../utils/api';
import { getCentres } from './centre';

// RE-Load User
export const reloadUser = () => async (dispatch) => {
    
    try {
        if(localStorage.token) {
            setAuthToken(localStorage.token);
        }

        const res = await axios.get(`${url}/api/admin/me`);
        
        dispatch({
            type: USER_RELOADED,
            payload: res.data
        });

        dispatch(getCentres());

    } catch (err) {
        console.log('Error from reload User');
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Load User
export const loadUser = (token) => async dispatch => {
    
    try {
        if(localStorage.token) {
            setAuthToken(localStorage.token);
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Methods": "GET, PUT, POST",
                'x-auth-token': localStorage.token
            }
        }

        const res = await axios.get(`${url}/api/admin/me`, config);

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
        // navigate('/dashboard');

        // dispatch(setToast('Logged in! Welcome.', 'success'));
    } catch (err) {
        console.log('Error from load User');
        dispatch({
            type: AUTH_ERROR
        });
    }
};

//Get Logged In User
export const getLoggedInUser = (token, navigate) => async dispatch => {

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Methods": "GET, PUT, POST",
                'x-auth-token': token
            }
        }

        const res = await axios.get(`${url}/api/admin/me`, config);
        localStorage.setItem('token', token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        await dispatch(loadUser());
        navigate('/dashboard')
        // dispatch(setToast('Logged in! Welcome.', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setToast(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL,
            payload: { error: err.response.data.message }
        });
    }
};

// Login Admin
export const login = ({ email, password }) => async dispatch => {
    const body = JSON.stringify({ email, password });
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        }

        const res = await axios.post(`${url}/api/admin/login`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        await dispatch(loadUser());
        // dispatch(getCentres());
    } catch (err) {
        console.log('Error from Login');
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setToast(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
}

// LOGOUT
export const logout = () => async dispatch => {
    try{
        localStorage.removeItem('token');
        // dispatch({ type: CLEAR_USER});
        dispatch({ type: CLEAR_COMPLAINTS});
        dispatch({ type: CLEAR_CENTRES});
        dispatch({ type: CLEAR_STAFF });
        dispatch({ type: CLEAR_EMERGENCIES});
        dispatch({ type: CLEAR_RESCUES});
        dispatch({ type: CLEAR_GUESTS});
        await dispatch({
            type: LOGOUT
        });
        dispatch(setToast('Logged out successfully', 'success'));
    } catch(err){
        dispatch(setToast('Error logging out! Try Again.', 'danger'));
    }
}