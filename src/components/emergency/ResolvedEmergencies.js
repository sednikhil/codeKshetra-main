import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCentres } from '../../actions/centre';
import { getEmergencies } from '../../actions/emergency';
import EmergencyItem from './EmergencyItem';

const ResolvedEmergencies = ({
  auth,
  getEmergencies,
  emergency: {emergencies},
  getCentres,
  centre: {centres},
}) => {

  useEffect(() => {
    getEmergencies();
  }, [getEmergencies]);

  useEffect(() => {
    getCentres();
  }, [getCentres]);

  return (
    <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
    <table style={{marginTop: '2rem'}} className='table'>
      <thead>
        <tr>
          <td>Date Issued</td>
          <td>Priority</td>
          <td>Centre</td>
          <td>Message</td>
          <td>Resolved</td>
        </tr>
      </thead>
      <tbody>
        {emergencies.map(emergency => emergency.emergency[0].status===true && (
          centres.map(centre => centre._id===emergency._id &&
            <EmergencyItem key={emergency.emergency[0]._id} emergency={emergency.emergency[0]} centreid={emergency._id} centre={centre} />
        )))}
      </tbody>
    </table>
    </Row>
  )
}

ResolvedEmergencies.propTypes = {
  getEmergencies: propTypes.func.isRequired,
  emergency: propTypes.object.isRequired,
  centre: propTypes.object.isRequired,
  getCentres: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  emergency: state.emergency,
  centre: state.centre
})

export default connect(mapStateToProps, { getEmergencies,  getCentres})(ResolvedEmergencies);