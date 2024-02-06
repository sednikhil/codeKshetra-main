import { combineReducers } from "redux";
import alert from './alert';
import auth from './auth';
import centre from './centre';
import complaint from './complaint';
import emergency from './emergency';
import guest from './guest';
import helpline from './helpline';
import map from './map';
import notice from './notice';
import rescued from './rescued';
import staff from './staff';
import toast from './toast';

export default combineReducers({
    toast,
    auth,
    complaint,
    centre,
    notice,
    guest,
    alert,
    helpline,
    staff,
    emergency,
    rescued,
    map
});