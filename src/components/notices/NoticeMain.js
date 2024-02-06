import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const NoticeMain = () => {
  return (
    <section>
      <div style={{display: 'flex'}}>
        <div style={{flex: '70%', padding: '2rem'}}>
          <h1 className='text-primary lead'>Notices</h1>
        </div>
        <div style={{flex: '30%', padding: '2rem'}}>
          <Link to={'all'}><div className='btn btn-primary'> All Notices </div></Link>
          <Link to={'add'}><div className='btn btn-success'> Add Notice </div></Link>
        </div>
      </div>
      <hr style={{marginLeft: '0rem', marginRight: '3rem'}}/>
    <Outlet/>
    </section>
  )
}

export default NoticeMain;
