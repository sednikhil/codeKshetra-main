import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAlerts } from '../../actions/alert';
import AlertItem from './AlertItem';

const AllAlerts = ({
  getAlerts,
  alert: {alerts},
}) => {

  useEffect(() => {
    getAlerts();
  }, [getAlerts]);

  return (
    <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
    <table style={{marginTop: '2rem'}} className='table'>
      <thead>
        <tr>
          <td>Date</td>
          <td>Priority</td>
          <td>Message</td>
          <td>Status</td>
          <td>Head Alert</td>
        </tr>
      </thead>
      <tbody>
        {alerts.map(alert => (
            <AlertItem key={alert._id} alert={alert} />
        ))}
      </tbody>
    </table>
    </Row>
  )
}

AllAlerts.propTypes = {
  getAlerts: propTypes.func.isRequired,
  alert: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  alert: state.alert
})

export default connect(mapStateToProps, { getAlerts })(AllAlerts);