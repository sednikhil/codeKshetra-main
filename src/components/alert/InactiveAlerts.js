import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAlerts } from '../../actions/alert';
import AlertItem from './AlertItem';

const InactiveAlerts = ({
  auth,
  getAlerts,
  alert: {alerts},
  showActions
}) => {

  useEffect(() => {
    getAlerts();
  }, [getAlerts]);

  return (
    <table style={{marginTop: '2rem'}} className='table'>
      <thead>
        <tr>
          <td>Date</td>
          <td>Priority</td>
          <td>Message</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {alerts.map(alert => (
            alert.status===false && <AlertItem key={alert._id} alert={alert} />
        ))}
      </tbody>
    </table>
  )
}

InactiveAlerts.propTypes = {
  getAlerts: propTypes.func.isRequired,
  alert: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  alert: state.alert
})

export default connect(mapStateToProps, { getAlerts })(InactiveAlerts);