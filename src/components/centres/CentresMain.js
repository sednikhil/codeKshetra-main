import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CentresMain = () => {
  return (
    <section>
      <div style={{display: 'flex'}}>
        <div style={{flex: '50%', padding: '2rem'}}>
          <h1 className='text-primary lead'>Centres</h1>
        </div>
        <div style={{flex: '50%', padding: '2rem'}}>
          <Link to={''}><div className='btn btn-primary'> All Centres</div></Link>
          <Link to={'roles'}><div className='btn btn-purple'> Filter by Roles</div></Link>
          <Link to={'add'}><div className='btn btn-success'> Add Centre</div></Link>
        </div>
      </div>
      <hr style={{marginLeft: '0rem', marginRight: '3rem'}}/>
    <Outlet/>
    </section>
  )
}

export default CentresMain;
