import propTypes from 'prop-types';
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { reloadUser } from '../../actions/auth';
import { getCentres } from '../../actions/centre';
import { getComplaints } from '../../actions/complaint';
import { getEmergencies } from '../../actions/emergency';
import { getGuests } from '../../actions/guest';
import { getAllRescues } from '../../actions/rescue';
import { getStaffs } from '../../actions/staff';

import Calendar from './Calendar';


const DashboardMain = ({auth: {user}, reloadUser, getCentres, getComplaints, getStaffs, getAllRescues, getGuests, getEmergencies}) => {
  useEffect(() => {
    reloadUser();
  }, [reloadUser]);
  useEffect(() => {
    getCentres();
  },[getCentres]);
  useEffect(() => {
    getGuests();
  },[getGuests]);
  useEffect(() => {
    getComplaints();
  },[getComplaints]);
  useEffect(() => {
    getStaffs();
  },[getStaffs]);
  useEffect(() => {
    getAllRescues();
  },[getAllRescues]);
  useEffect(() => {
    getEmergencies();
  },[getEmergencies]);

  return (
    <section className='mycontainer '>
      <div style={{display: 'flex'}}>
        <div style={{flex: '50%', padding: '2rem'}}>
        <h1 className='lead text-primary'>Welcome Admin&nbsp;&nbsp;<i className='fas fa-user-crown' style={{color: 'var(--primary-color'}}></i></h1>
          <table className='table'>
            <tbody>
            <tr>
              <td className='td'>
                Name
              </td>
              <td>
              {user && user.name}
              </td>
            </tr>
            <tr>
              <td>
                Email
              </td>
              <td>
              {user && user.email}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div style={{flex: '50%', padding: '2rem'}}>
          <Calendar/>
        </div>
      </div>
      
    </section>
  )
}

DashboardMain.propTypes = {
  auth: propTypes.object.isRequired,
  reloadUser: propTypes.func.isRequired,
  getCentres: propTypes.func.isRequired,
  getGuests: propTypes.func,
  getComplaints: propTypes.func.isRequired,
  getStaffs: propTypes.func.isRequired,
  getAllRescues: propTypes.func.isRequired,
  getEmergencies: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  // centre: state.centre,
  // guest: state.guest,
  // complaint: state.complaint,
  // staff: state.staff,
  // rescued: state.rescued
});

export default connect(mapStateToProps, { getCentres, getComplaints, getStaffs, getAllRescues, getGuests, reloadUser, getEmergencies})(DashboardMain);