import axios from "axios";
import download from 'downloadjs';
import { url } from "../utils/api";
import { setToast } from "./toast";
import { ADD_NOTICE, DELETE_NOTICE, DOWNLOAD_NOTICE, GET_NOTICES, NOTICE_ERROR } from './types';

// Get notices
export const getNotices = () => async dispatch => {
    try {
      const res = await axios.get(`${url}/api/notice/all`);
      dispatch({
        type: GET_NOTICES,
        payload: res.data
    });
    }
    catch (err) {
      dispatch({
          type: NOTICE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status}
      });
    }
  };


// Add Notice
export const addNotice = (formData, navigate) => async dispatch => {
    //console.log(formData.get('file'));
    const formD = {
        file: formData.get('file') ,
        title: formData.get('title') ,
        description: formData.get('description') 
    }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    try {
        const res = await axios.post(`${url}/api/notice/upload`, formD, config);

        dispatch({
            type: ADD_NOTICE,
            payload: res.data
        });
        dispatch(setToast('Uploaded a new notice', 'success'));
        navigate('/dashboard/notices');
    } catch (err) {
        dispatch({
            type: NOTICE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Download Notice
export const downloadNotice = (_id, path, mimetype) => async dispatch => {
    try {
        const res = await axios.get(`${url}/api/notice/download/${_id}`, {
            responseType: 'blob'
        });
        
        const split = path.split('/');
        const filename = split[split.length - 1];
        
        dispatch({
            type: DOWNLOAD_NOTICE,
            payload: _id
        });

        download(res.data, filename, mimetype);
        dispatch(setToast('Downloading a notice', 'success'));
    }
    catch (err) {
        dispatch({
            type: NOTICE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}

// Delete Notice
export const deleteNotice = _id => async dispatch => {

    try {
        await axios.delete(`${url}/api/notice/${_id}`);

        dispatch({
            type: DELETE_NOTICE,
            payload: _id
        });
        dispatch(setToast('Deleted a notice', 'success'));
    } catch (err) {
        dispatch({
            type: NOTICE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        });
    }
}