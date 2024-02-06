import axios from "axios";
import { url } from "../utils/api";
import { GET_MAP_CENTRES, MAP_CENTRES_ERROR } from './types';


export const getMapCentres = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await axios.get(`${url}/api/centre/publicinfo`, config);

        dispatch({
            type: GET_MAP_CENTRES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: MAP_CENTRES_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}