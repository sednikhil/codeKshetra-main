import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { addAlert, getAlerts } from '../../actions/alert';

const AddAlert = ({ addAlert, getAlerts }) => {

  useEffect(() => {
    getAlerts();
  }, [getAlerts]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    priority:'low',
    message:""
  })

  const {
    priority,
    message
   } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addAlert(formData, navigate);
  };

  
  return (
    <>
    <h3 style={{color:"var(--primary-color)", marginTop:'1rem'}}> Enter Alert Information</h3>
    <br/><br/>
    <div className="post-form" style={{marginLeft: '200px', marginRight: '200px'}}>
      <form className="form" onSubmit={ e => onSubmit(e)}>

        <label>Priority
          <select id="priority" name="priority" value={priority} size="1" required onChange={e => onChange(e)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br/>
        <label>Alert Message
          <input type='text' placeholder='Enter alert message' name="message" value={message} required onChange={e => onChange(e)} />
        </label>
      
        <input type="submit" style={{marginTop: '1rem', marginBottom: '2rem'}} className="btn btn-primary" value="Post Alert" />
      </form>
    </div>
    </>
  )
}

AddAlert.propTypes = {
  addAlert: propTypes.func.isRequired,
  getAlerts: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  alert: state.alert
});

export default connect(mapStateToProps, { getAlerts, addAlert })(AddAlert);