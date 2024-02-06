import axios from 'axios';
import { LOGOUT } from '../actions/types';
import store from '../store';


export const url = "https://sih-backend.azurewebsites.net"
// export const url = "http://localhost:8081"

// Create an instance of axios
const api = axios.create({
  baseURL: `${url}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;