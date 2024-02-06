import propTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router';
import { Link, useLocation } from 'react-router-dom';

const sidebarNavItems = [
  {
    display: 'Dashboard',
    icon: <i className='fa fa-star'></i>,
    to: '',
    section: 'main'
  },
  {
    display: 'Alerts',
    icon: <i className='fa fa-bell-on'></i>,
    to: 'alerts',
    section: 'alerts'
  },
  {
    display: 'Staffs',
    icon: <i className='fas fa-user-shield'></i>,
    to: 'staffs',
    section: 'staffs'
  },
  {
      display: 'Centres',
      icon: <i className='fas fa-warehouse-alt'></i>,
      to: 'centres',
      section: 'centres'
  },
  {
      display: 'Users',
      icon: <i className='fas fa-users'></i>,
      to: 'users',
      section: 'users'
  },
  {
      display: 'Complaints',
      icon: <i className='fa fa-receipt'></i>,
      to: 'complaints',
      section: 'complaints'
  },
  {
    display: 'Emergencies',
    icon: <i className='fas fa-sensor-alert'></i>,
    to: 'emergencies',
    section: 'emergencies'
  },
  {
    display: 'Rescues',
    icon: <i className='fas fa-user-injured'></i>,
    to: 'rescues',
    section: 'rescues'
  },
  {
    display: 'Notices',
    icon: <i className='fas fa-clipboard'></i>,
    to: 'notices',
    section: 'notices'
  },
  {
    display: 'Helplines',
    icon: <i className='fas fa-phone-office'></i>,
    to: 'helplines',
    section: 'helplines'
  },
]

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef();
  const location = useLocation();

  // change active index
  useEffect(() => {
      const curPath = window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : 'main';
      const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
      setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
  <div className='sidebar'>
      <div className="sidebar__logo"></div>
      <div ref={sidebarRef} className="sidebar__menu">
          {
            sidebarNavItems.map((item, index) => (
              <Link to={item.to} key={index}>
                  <div className={`${activeIndex === index ? 'sidebar__menu__item__active' : 'sidebar__menu__item'}`}>
                      <div className="sidebar__menu__item__icon">
                          {item.icon}
                      </div>
                      <div className="sidebar__menu__item__text">
                          {item.display}
                      </div>
                  </div>
              </Link>
            ))
          }
      </div>
      <div className='sidebar__footer'>
        {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'ASIA/Kolkata'} style={{color:'#17a2b8', borderStyle: 'solid', padding: '1rem', paddingTop: '.5rem', paddingBottom: '.5rem', borderRadius: '10px', backgroundColor: 'white'}}/> */}
      </div>
  </div>
)};

const Dashboard = () => {
  return (
    <section>
      <Sidebar />
      <div className='mycontainer container-dashboard'>
        <Outlet />
      </div>
    </section>
  )
}

Dashboard.propTypes = {
  auth: propTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);