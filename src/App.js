import propTypes from 'prop-types';
import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadUser } from './actions/auth';
import './CSS/App.css';
import store from './store';

// Redux
import setAuthToken from './utils/setAuthToken';

// Private Route
import PrivateRoute from './components/routing/PrivateRoute';



// Auth 
import { LOGOUT } from './actions/types';
import Login from './components/auth/Login';


// Layout
import DashboardMain from './components/dashboard/DashboardMain';
import HeadingAlert from './components/layout/HeadingAlert';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import NotFound from './components/layout/NotFound';
import PreLoader from './components/layout/PreLoader';
import Toast from './components/layout/Toast';

// Complaints
import AllComplaints from './components/complaint/AllComplaints';
import ComplaintsMain from './components/complaint/ComplaintsMain';
import PendingComplaints from './components/complaint/PendingComplaints';
import ResolvedComplaints from './components/complaint/ResolvedComplaints';

// Emergencies
import AllEmergencies from './components/emergency/AllEmergencies';
import EmergenciesMain from './components/emergency/EmergenciesMain';
import PendingEmergencies from './components/emergency/PendingEmergencies';
import ResolvedEmergencies from './components/emergency/ResolvedEmergencies';

// Staffs
import AddStaff from './components/staffs/AddStaff';
import AllStaffs from './components/staffs/AllStaffs';
import ChangeCentre from './components/staffs/ChangeCentre';
import StaffsMain from './components/staffs/StaffsMain';

// Alerts
import ActiveAlerts from './components/alert/ActiveAlerts';
import AddAlert from './components/alert/AddAlert';
import Alerts from './components/alert/Alerts';
import AlertsMain from './components/alert/AlertsMain';
import AllAlerts from './components/alert/AllAlerts';
import InactiveAlerts from './components/alert/InactiveAlerts';

// Centres
import AddCentre from './components/centres/AddCentre';
import AllCentres from './components/centres/AllCentres';
import CentresMain from './components/centres/CentresMain';
import EditCentre from './components/centres/EditCentre';
import FilteredCentres from './components/centres/FilteredCentres';

// Guests
import AllGuests from './components/guests/AllGuests';
import GuestsMain from './components/guests/GuestsMain';

// Notices
import AddNotice from './components/notices/AddNotice';
import AdminNotices from './components/notices/AdminNotices';
import NoticeMain from './components/notices/NoticeMain';
import Notices from './components/notices/Notices';

//Helplines
import AddHelpline from './components/helpline/AddHelpline';
import AllHelplines from './components/helpline/AllHelplines';
import HelplineMain from './components/helpline/HelplineMain';
import Helplines from './components/helpline/Helplines';

// Rescued
import AddRescued from './components/rescue/AddRescued';
import AllRescues from './components/rescue/AllRescues';
import EditRescued from './components/rescue/EditRescued';
import RescuedMain from './components/rescue/RescuedMain';

// Map
import MapCentres from './components/map/MapCentres';

//Bootstrap 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Lazy Loading Pages
const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));

const App = ({loadUser, auth}) => {

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      loadUser(localStorage.token);
    }
    // store.dispatch(loadUser());
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, [loadUser]);
  
  return(
  // <Provider store={store}>
    <Router>
      {/* <Navbar/>
      <HeadingAlert/> */}
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/centremap' element={<MapCentres />} />
          <Route path='/notices' element={<Notices />} />
          <Route path='/alerts' element={<Alerts />} />
          <Route path='/helplines' element={<Helplines />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route index element={<DashboardMain/>} />

            <Route path='complaints' element={<ComplaintsMain />} >
              <Route index element={<AllComplaints/>} />
              <Route path='all' element={<AllComplaints />} />
              <Route path='pending' element={<PendingComplaints />} />
              <Route path='resolved' element={<ResolvedComplaints />} />
            </Route>

            <Route path='emergencies' element={<EmergenciesMain />} >
              <Route index element={<AllEmergencies/>} />
              <Route path='all' element={<AllEmergencies />} />
              <Route path='pending' element={<PendingEmergencies />} />
              <Route path='resolved' element={<ResolvedEmergencies />} />
            </Route>

            <Route path='alerts' element={<AlertsMain />} >
              <Route index element={<AllAlerts/>} />
              <Route path='all' element={<AllAlerts />} />
              <Route path='active' element={<ActiveAlerts />} />
              <Route path='inactive' element={<InactiveAlerts />} />
              <Route path='new' element={<AddAlert />} />
            </Route>

            <Route path='staffs' element={<StaffsMain />} >
              <Route index element={<AllStaffs/>} />
              <Route path='all' element={<AllStaffs />} />
              <Route path='new' element={<AddStaff />} />
              <Route path='change' element={<ChangeCentre />} />
            </Route>

            <Route path='centres' element={<CentresMain/>}>
              <Route index element={<AllCentres />} />
              {/* <Route path='all' element={<AllCentres />} /> */}
              <Route path='add' element={<AddCentre />} />
              <Route path='roles' element={<FilteredCentres />} />
              <Route path='edit/:id' element={<EditCentre />} />
            </Route>

            <Route path='users' element={<GuestsMain/>}>
              <Route index element={<AllGuests />} />
              <Route path='all' element={<AllGuests />} />
            </Route>

            <Route path='notices' element={<NoticeMain />}>
              <Route index element={<AdminNotices />} />
              <Route path='all' element={<AdminNotices />} />
              <Route path='add' element={<AddNotice />} />
            </Route>

            <Route path='helplines' element={<HelplineMain />}>
              <Route index element={<AllHelplines />} />
              <Route path='all' element={<AllHelplines />} />
              <Route path='add' element={<AddHelpline />} />
            </Route>

            <Route path='rescues' element={<RescuedMain />}>
              <Route index element={<AllRescues />} />
              <Route path='add' element={<AddRescued />} /> 
              <Route path='edit/:id' element={<EditRescued />} /> 
            </Route>

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Navbar/>
      <HeadingAlert/>
      <Toast/>
    </Router>
    // </Provider>
  )
};

App.propTypes = {
  loadUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {loadUser})(App);