import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const RescueMain = () => {
  return (
    <section>
      <div style={{display: 'flex'}}>
        <div style={{flex: '50%', padding: '2rem'}}>
          <h1 className='text-primary lead'>Rescues</h1>
        </div>
        <div style={{flex: '50%', padding: '2rem'}}>
          <Link to={''}><div className='btn btn-primary'> All </div></Link>
          <Link to={'add'}><div className='btn btn-success'> Add </div></Link>
        </div>
      </div>
      <hr style={{marginLeft: '0rem', marginRight: '3rem'}}/>
    <Outlet/>
    </section>
  )
}

export default RescueMain;
