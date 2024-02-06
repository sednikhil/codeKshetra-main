import propTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteStaff } from '../../actions/staff';

const StaffItem = ({
    deleteStaff,
    staff: { _id, name, date, email}, centre
}) =>{

    const navigate = useNavigate();
    
    return (
    <tr>
        <td style={{textAlign:'center'}}><Moment format='YYYY/MM/DD'>{date}</Moment></td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{centre.name}</td>
        <td><i className='fas fa-trash' style={{color:"var(--danger-color)", fontSize:'1rem'}} onClick={()=>deleteStaff(_id, navigate)}/></td>
    </tr>
)};

StaffItem.propTypes = {
    staff: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
    deleteStaff: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { deleteStaff })(
    StaffItem
);