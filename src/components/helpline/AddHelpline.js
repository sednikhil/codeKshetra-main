import propTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { addHelpline } from '../../actions/helpline';

const AddHelpline = ({addHelpline}) => {
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        contact: '',
        email: ''
    });

    const {
        name,designation,contact,email
    } = formData;

    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        addHelpline(formData, navigate);
    };

    return (
        <>
        <h3 style={{color:"var(--primary-color)", marginTop:'1rem'}}> Enter Helpline Information</h3>
            <br/><br/>
            <div className="post-form" style={{marginLeft: '200px', marginRight: '200px'}}>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <label>Name:<input type='text' placeholder='Name' name="name" value={name} required onChange={e => onChange(e)} /></label>
                <label>Designation:<input type='text' placeholder='Designation' name="designation" value={designation} required onChange={e => onChange(e)} /></label>
                <label>Contact:<input type='text' placeholder='Contact' name="contact" value={contact} required onChange={e => onChange(e)} /></label>
                <label>Email:<input type='email' placeholder='Email' name="email" value={email} required onChange={e => onChange(e)} /></label>

                <input type="submit" style={{ marginTop: '1rem', marginBottom: '2rem' }} className="btn btn-success" value="Add New Helpline" />
            </form>
        </div>
        </>
    );

}

AddHelpline.propTypes = {
    addHelpline: propTypes.func.isRequired,
    auth: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    helpline: state.helpline,
    auth: state.auth
  });

export default connect(mapStateToProps, {addHelpline})(AddHelpline);
