import {
  AUTH_ERROR,
  LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, USER_LOADED, USER_RELOADED
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null
}

function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
        case USER_RELOADED:
          return {
            ...state,
            isAuthenticated: true,
            loading: false,
            user: payload,
            error: null
          };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
          localStorage.setItem('token', payload.token);
          return {
            ...state,
            ...payload,
            isAuthenticated: true,
            // token: payload.token,
            loading: false,
            // user: payload.user,
            error: null
          };
        case AUTH_ERROR:
        case LOGOUT:
          localStorage.removeItem('token');
          return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null,
          };
        default:
          return state;
      }
}

export default authReducer;
