import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAlerts, getHeadAlert } from '../../actions/alert';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading, user}, logout, alert,  getAlerts, getHeadAlert }) => {
  useEffect(() => {
    getAlerts();
  }, [getAlerts]);
  useEffect(() => {
    getHeadAlert();
  }, [getHeadAlert]);

  return (
    <div className='mynavbar-container' div style={{zIndex:"999999"}}>

      <div className="mynavbar my-bg-gradient">
        <div style={{fontSize:'2rem', fontWeight: '600'}}>
          <Link to='/'> Bharat Rescue <span style={{fontSize:'1rem'}}>- Admin Portal</span></Link>
        </div>
        <ul>
            { isAuthenticated && user && <li><Link to='/dashboard'>Dashboard</Link></li>}
          <li><a href= 'https://www.ndrf.gov.in/' target="_blank" rel="noopener noreferrer">NDRF</a></li>
          <li><a href= 'https://ndma.gov.in/' target="_blank" rel="noopener noreferrer">NDMA</a></li>
          <li><a href= 'https://pmnrf.gov.in/en/' target="_blank" rel="noopener noreferrer">PMNRF</a></li>
          <li><Link to='/notices'>Notices</Link></li>
          <li><Link to='/alerts'>Alerts</Link></li>
          <li><li><Link to='/helplines'>Helplines</Link></li></li>
          <li>
            { isAuthenticated && 
              (
                <a onClick={logout} href='#!'>
                  <i className='fas fa-sign-out-alt'></i>{' '}
                  <span className='hide-sm'>Logout</span>
                </a>
              )
            }
            { !isAuthenticated && 
              (
                <Link to='/login'>
                  <i className='fas fa-sign-in'></i>{' '}
                  <span className='hide-sm'>Login</span>
                </Link>
              )
            }
          </li>
        </ul>
        
      </div>

      {/* <div className='mynavbar-alert'>
        {alert && alert.headalert && alert.headalert.length > 0 && 
            <p style={{backgroundColor:'var(--danger-color)', width: '100%'}}>
              ALERT : {alert.headalert[0].message}
            </p>
        }
      </div> */}

    </div>
  )
};

Navbar.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  alert: propTypes.object.isRequired,
  getAlerts: propTypes.func.isRequired,
  getHeadAlert: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  alert: state.alert
})

export default connect(mapStateToProps, { logout, getHeadAlert, getAlerts })(Navbar);
