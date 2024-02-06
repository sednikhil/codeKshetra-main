import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { connect } from 'react-redux';
import { getHeadAlert } from '../../actions/alert';
import About from './LandingComp/About/About';
import CountBanner from './LandingComp/CounterBanner/CountBanner';
import LandingFooter from './LandingComp/LandingFooter';
import Services from './LandingComp/Services/Services';
import TopBanner from './LandingComp/TopBanner/TopBanner';

const Landing = ({alert, getHeadAlert}) => {

  useEffect(() => {
    getHeadAlert();
  }, [getHeadAlert]);

  return (
    <div >
    {/* <LandingCarousel/> */}
    <TopBanner/>
    <br/> <br/>
    <About/>
    <br/> <br/>
    <Services/>
    <br/> <br/>
    <Marquee>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/NDRF_Logo.png"  className='marque-logo'/>
      <img src="https://idrn.nidm.gov.in/images/nidm_logo.png" className='marque-logo'/>
 
      <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/National_Disaster_Management_Authority_Logo.png" className='marque-logo'/>
      <img src="https://sdma.kerala.gov.in/wp-content/uploads/2020/09/SDMA-Logo.jpg" className='marque-logo'/>
      <img src="https://hpsdma.nic.in/images/logo_2hp.png" className='marque-logo'/>
      <img src="https://pbs.twimg.com/profile_images/1630580439571222534/VQOPjl7m_400x400.jpg" className='marque-logo'/>
      <img src="https://pbs.twimg.com/profile_images/1250774398551896064/vfFv0LCY_400x400.jpg" className='marque-logo'/>    
    </Marquee>
    <br/> <br/>
    <CountBanner/>      
    <br/> <br/>
    <LandingFooter/>
    </div>
  )
};

Landing.propTypes = {
  alert: propTypes.object.isRequired,
  getHeadAlert: propTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  alert: state.alert
})

export default connect(mapStateToProps, {getHeadAlert})(Landing);