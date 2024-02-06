import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getComplaints } from '../../actions/complaint';
import ComplaintItem from './ComplaintItem';

const AllComplaints = ({
  auth,
  getComplaints,
  complaint: {complaints},
  showActions
}) => {

  useEffect(() => {
    getComplaints();
  }, [getComplaints]);

  return (
    <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
    <table style={{marginTop: '2rem'}} className='table'>
      <thead>
        <tr>
          <td>Date</td>
          <td>User Name</td>
          <td>Complaint</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {complaints.map(complaint => (
            <ComplaintItem key={complaint._id} complaint={complaint} />
        ))}
      </tbody>
    </table>
    </Row>
  )
}

AllComplaints.propTypes = {
  getComplaints: propTypes.func.isRequired,
  complaint: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  complaint: state.complaint
})

export default connect(mapStateToProps, { getComplaints })(AllComplaints);