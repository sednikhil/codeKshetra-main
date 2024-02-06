import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCentres } from '../../actions/centre';
import { getStaffs } from '../../actions/staff';
import StaffItem from './StaffItem';

const AllStaffs = ({
  getStaffs, getCentres, staff: {staffs}, centre: {centres}
}) => {
    useEffect(() => {
        getCentres();
    }, []);

  useEffect(() => {
    getStaffs();
  }, [getStaffs]);

  return (
    <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <table style={{marginTop: '2rem'}} className='table'>
        <thead>
          <tr>
            <td>Date</td>
            <td>Name</td>
            <td>Email</td>
            <td>Centre Name</td>
          </tr>
        </thead>
        <tbody>
          {staffs.map(staff => (
              centres.map(centre => (centre._id === staff.centreid) &&
                  <StaffItem key={staff._id} staff={staff} centre={centre}/>
              )
          ))}
        </tbody>
      </table>
    </Row>
  )
}

AllStaffs.propTypes = {
    getStaffs: propTypes.func.isRequired,
    staff: propTypes.object.isRequired,
    getCentres: propTypes.func.isRequired,
    centre: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
  staff: state.staff,
  centre: state.centre,
})

export default connect(mapStateToProps, { getStaffs, getCentres })(AllStaffs);