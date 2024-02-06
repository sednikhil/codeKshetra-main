import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const StaffsMain = () => {
  return (
    <section>
      <div style={{display: 'flex'}}>
        <div style={{flex: '60%', padding: '2rem'}}>
          <h1 className='text-primary lead'>Staffs</h1>
        </div>
        <div style={{flex: '40%', padding: '2rem'}}>
          <Link to={'all'}><div className='btn btn-primary'> All </div></Link>
          <Link to={'new'}><div className='btn btn-success'> Register Staff</div></Link>
          <Link to={'change'}><div className='btn btn-purple'> Change Centre</div></Link>
        </div>
      </div>
      <hr style={{marginLeft: '0rem', marginRight: '3rem'}}/>
    <Outlet/>
    </section>
  )
}

export default StaffsMain;
