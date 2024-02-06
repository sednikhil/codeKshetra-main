import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children,  auth: { user, isAuthenticated, loading }}) => {

    // if(!isAuthenticated ) return <Navigate to = '/login' />;
    // else return children;
    if(isAuthenticated && user) return children;
    else return <Navigate to = '/login' />;
}

PrivateRoute.propTypes = {
    auth: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);