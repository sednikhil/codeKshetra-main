import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteHelpline } from '../../actions/helpline';

const HelplineItem = ({
    auth,
    helpline: { _id, name, designation, contact, email}, deleteHelpline
}) =>{

    const navigate = useNavigate();
    return (
    <tr>
        <td>{name}</td>
        <td>{designation}</td>
        <td>{contact}</td>
        <td>{email}</td>
        <td ><i className="fas fa-trash" style={{color:"var(--danger-color)"}}  onClick={() => deleteHelpline(_id, navigate)}/></td>
    </tr>
)};

HelplineItem.propTypes = {
    helpline: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
    deleteHelpline: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {deleteHelpline})(HelplineItem);