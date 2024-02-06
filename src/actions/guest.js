import axios from "axios";
import { url } from "../utils/api";
import { GET_GUESTS, GUEST_ERROR } from './types';

// Get guest
export const getGuests = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/user/all`, config);

        dispatch({
            type: GET_GUESTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GUEST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}