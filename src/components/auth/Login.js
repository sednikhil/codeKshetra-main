import propTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';

const Login = ({ login, auth:{isAuthenticated, user }}) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
      login({ email, password });
  };

    // Navigate to dashboard if authenticated
    if(isAuthenticated && user) {
      return <Navigate to = '/dashboard'/>
    }

  return (
    <section className="mycontainer">
      <h1 className="large text-primary">Admin Login</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign in to admin account</p>
      <form className="form" onSubmit={ e => onSubmit(e)}>
        <div className="form-group">
          <input
          type="email"
          placeholder="Enter Email (Test Email: rescueadmin@gmail.com)"
          name="email"
          required
          onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter Password (Test Password: 1234abcd)"
            name="password"
            minLength="8"
            required
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Sign In" />
      </form>
    </section>
  )
};

Login.propTypes = {
  login: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {login})(Login);