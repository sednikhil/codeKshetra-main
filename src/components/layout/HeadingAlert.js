import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { connect } from 'react-redux';
import { getAlerts, getHeadAlert } from '../../actions/alert';

const HeadingAlert = ({ alert, getAlerts, getHeadAlert }) => {
  useEffect(() => {
    getAlerts();
  }, [getAlerts]);
  useEffect(() => {
    getHeadAlert();
  }, [getHeadAlert]);

  return (
    <div className='heading-alert-container'>

      <div className='heading-alert ' style={{ color: 'white',backgroundColor:'var(--primary-color)', fontWeight:'bold'}}>
        <Marquee speed={100} gradient={false}>
          ||&emsp;सहायता सदैव सर्वत्र&emsp;||
        </Marquee>
      </div>

      {alert &&
        alert.headalert &&
        alert.headalert.length > 0 &&
        alert.headalert[0].status === true && (
          <div className='heading-alert bg-danger'>
            <Marquee speed={100} gradient={false} pauseOnHover={true}>
              ALERT: &nbsp; {alert.headalert[0].message}{' '}
            </Marquee>
          </div>
      )}

    </div>
  );
};

HeadingAlert.propTypes = {
  alert: propTypes.object.isRequired,
  getAlerts: propTypes.func.isRequired,
  getHeadAlert: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  alert: state.alert,
});

export default connect(mapStateToProps, { getHeadAlert, getAlerts })(
  HeadingAlert
);
