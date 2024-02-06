import propTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { changeStatusEmergency } from '../../actions/emergency';

const EmergencyItem = ({
    auth,
    changeStatusEmergency,
    emergency: { _id, message, dateIssued, status, priority},
    centreid,
    centre
}) =>{
    
    return (
    <tr>
        <td style={{textAlign:'center'}}><Moment format='YYYY/MM/DD'>{dateIssued}</Moment></td>
        <td>{priority==='high'?"High":priority==='low'?"Low":"Medium"}</td>
        <td>{centre.name}</td>
        <td>{message}</td>
        <td style={{textAlign:'center'}}>
            {status === false ? 
                <i className='fas fa-check-circle' style={{color:'#d1d1d1', fontSize:'2rem'}} onClick={() => changeStatusEmergency(centreid,_id)} />
            : 
                <i className='fas fa-check-circle' style={{color:'#4CBB17', fontSize:'2rem'}} onClick={() => changeStatusEmergency(centreid,_id)} />
            }
        </td>
    </tr>
)};

EmergencyItem.propTypes = {
    emergency: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
    changeStatusEmergency: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { changeStatusEmergency })(
    EmergencyItem
);