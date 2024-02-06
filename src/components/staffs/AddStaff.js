import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCentres } from '../../actions/centre';
import { addStaff } from '../../actions/staff';

const AddStaff = ({ addStaff, getCentres, centre:{centres}}) => {

    useEffect(() => {
        getCentres();
    }, []);

  const navigate = useNavigate();

  let firstCenter = centres.length > 0 ? centres[0] : "";

  const [formData, setFormData] = useState({
    centreid: firstCenter,
    name:"",
    email:"",
    password: ""
  })

  const {
    centreid, name, email, password
   } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addStaff(formData, navigate);
  };

  return (
    <>
    <h3 style={{color:"var(--primary-color)", marginTop:'1rem'}}> Enter Staff Information</h3>
    <br/>
    <div className="post-form" style={{marginLeft: '200px', marginRight: '200px'}}>
      <form className="form" onSubmit={ e => onSubmit(e)}>

        <label>Select Centre
          <select id="centreid" name="centreid" value={centreid} size="1" required onChange={e => onChange(e)}>
            {centres.map(centre => ( <option value={centre._id.toString()}> {centre.name} </option>))}
          </select>
        </label>
        
        <label>Staff Name
          <input type='text' placeholder='Enter name' name="name" value={name} required onChange={e => onChange(e)} />
        </label>
        <label>Email
          <input type='email' placeholder='Enter email' name="email" value={email} required onChange={e => onChange(e)} />
        </label>
        <label>Password
          <input type='password' placeholder='Enter password' name="password" value={password} required onChange={e => onChange(e)} />
        </label>
      
        <input type="submit" style={{marginTop: '1rem', marginBottom: '2rem'}} className="btn btn-primary" value="Register Staff" />
      </form>
    </div>
    </>
  )
}

AddStaff.propTypes = {
  addStaff: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  centre: propTypes.object.isRequired,
  getCentres: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  staff: state.staff,
  centre: state.centre,
});

export default connect(mapStateToProps, { addStaff, getCentres })(AddStaff);