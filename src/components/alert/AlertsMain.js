import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const AlertsMain = () => {
  return (
    <section>
      <div style={{display: 'flex'}}>
        <div style={{flex: '60%', padding: '2rem'}}>
          <h1 className='text-primary lead'>Alerts</h1>
        </div>
        <div style={{flex: '40%', padding: '2rem'}}>
          <Link to={'all'}><div className='btn btn-primary'> All </div></Link>
          <Link to={'active'}><div className='btn btn-danger'> Active</div></Link>
          <Link to={'inactive'}><div className='btn btn-success'> Inactive</div></Link>
          <Link to={'new'}><div className='btn btn-purple'> Create Alert</div></Link>
        </div>
      </div>
      <hr style={{marginLeft: '0rem', marginRight: '3rem'}}/>
    <Outlet/>
    </section>
  )
}

export default AlertsMain;
