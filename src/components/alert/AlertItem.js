import propTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { changeAlertStatus, deleteAlert, removeHeadAlert, setHeadAlert } from '../../actions/alert';

const AlertItem = ({
    changeAlertStatus, deleteAlert, removeHeadAlert, setHeadAlert,
    alert: { _id, priority, message, date, status, headingAlert},
}) =>{

    const navigate = useNavigate();
    const priorityBG = priority === 'high' ? 'priority-high' : priority === 'medium' ? 'priority-medium' : 'priority-low';
    return (
    <tr>
        <td style={{textAlign:'center'}}><Moment format='YYYY/MM/DD'>{date}</Moment></td>
        <td className={priorityBG}>{priority}</td>
        <td>{message}</td>
        <td style={{textAlign:'center'}}>
            {status === true ? 
                <i className='fas fa-toggle-on' style={{color:'var(--danger-color)', fontSize:'1.5rem'}} onClick={() => changeAlertStatus(_id)} />
            : 
                <i className='fas fa-toggle-off' style={{color:'rgb(209, 209, 209)', fontSize:'1.5rem'}} onClick={() => changeAlertStatus(_id)} />
            }
        </td>
        <td style={{textAlign:'center'}}>
            {headingAlert === true ? 
                <i className='fas fa-siren-on' style={{color:'var(--danger-color)', fontSize:'1.5rem'}} onClick={() => removeHeadAlert(_id)} />
            : 
                <i className='fas fa-siren' style={{color:'rgb(209, 209, 209)', fontSize:'1.5rem'}} onClick={() => setHeadAlert(_id)} />
            }
        </td>
        <td><i className='fas fa-trash' style={{color:"var(--danger-color)", fontSize:'1.1rem'}} onClick={()=>deleteAlert(_id, navigate)}/></td>
    </tr>
)};

AlertItem.propTypes = {
    alert: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
    changeAlertStatus: propTypes.func.isRequired,
    deleteAlert: propTypes.func.isRequired,
    removeHeadAlert: propTypes.func.isRequired,
    setHeadAlert: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { changeAlertStatus, deleteAlert, removeHeadAlert, setHeadAlert })(
    AlertItem
);