import propTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const GuestItem = ({
    auth,
    guest: { _id, name,email,photo,dob, date, gender, contact},
}) => (
    <tr>
        <td><img src={photo} height='40px' className='guest-profile-img' alt='profile'/></td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{gender}</td>
        <td style={{textAlign:'center'}}><Moment format='YYYY/MM/DD'>{dob}</Moment></td>
        <td>{contact}</td>
        <td style={{textAlign:'center'}}><Moment format='YYYY/MM/DD'>{date}</Moment></td>
    </tr>
);

GuestItem.propTypes = {
    guest: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { })(
    GuestItem
);