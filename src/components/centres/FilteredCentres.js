import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCentres } from '../../actions/centre';
import CentreItem from './CentreItem';

const FilteredCentres = ({
  getCentres,
  centre: {centres}, staff: {staffs},
  showActions
}) => {

  useEffect(() => {
    getCentres();
  }, [getCentres]);

  const [avalanche, setAvalanche] = useState(false);
  const [earthquake, setEarthquake] = useState(false);
  const [fire, setFire] = useState(false);
  const [flood, setFlood] = useState(false);
  const [hurricane, setHurricane] = useState(false);

  const handleToggle = (e) => {
    if(e.target.name === 'avalanche') {
      setAvalanche(!avalanche);
    } else if(e.target.name === 'earthquake') {
      setEarthquake(!earthquake);
    } else if(e.target.name === 'fire') {
      setFire(!fire);
    } else if(e.target.name === 'flood') {
      setFlood(!flood);
    } else if(e.target.name === 'hurricane') {
      setHurricane(!hurricane);
    }
  }

  return (
    <Row>
      <Row style={{display: 'flex', marginTop: "2rem", justifyContent:'center', alignItems: 'center'}}>
        <Col><p>Filter by role:&emsp;</p></Col>
        <Col>
          <label>Avalanche <input type='checkbox' name='avalanche' checked={avalanche===true} onClick={e=>handleToggle(e)}/></label>&emsp;
          <label>Earthquake <input type='checkbox' name='earthquake' checked={earthquake===true} onClick={e=>handleToggle(e)}/></label>&emsp;
          <label>Fire <input type='checkbox' name='fire' checked={fire===true} onClick={e=>handleToggle(e)}/></label>&emsp;
          <label>Flood <input type='checkbox' name='flood' checked={flood===true} onClick={e=>handleToggle(e)}/></label>&emsp;
          <label>Hurricane <input type='checkbox' name='hurricane' checked={hurricane===true} onClick={e=>handleToggle(e)}/></label>
        </Col>
      </Row>
      <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <table style={{marginTop: '2rem'}} className='table'>
          <thead>
            <tr>
              <td>Date</td>
              <td>Name</td>
              <td>Chief Name</td>
              <td>Contact</td>
              <td>Emergency</td>
              <td>Active</td>
              <td>Edit</td>
              <td>View</td>
              <td>Map</td>
            </tr>
          </thead>
          <tbody>
            {/* {
            ((avalanche===true && earthquake===true && fire===true && flood===true && hurricane===true) || (avalanche===false && earthquake===false && fire===false && flood===false && hurricane===false)) ?
              centres.map(centre => (
                  <CentreItem key={centre._id} centre={centre} staffs={staffs}/>
              ))
              :
              (centres.map(centre => (
                ((avalanche !== centre.roles.avalanche) || (earthquake !== centre.roles.earthquake) || (fire !== centre.roles.fire) || (flood !== centre.roles.flood) || (hurricane !== centre.roles.hurricane)) &&
                  <CentreItem key={centre._id} centre={centre} staffs={staffs}/>
              ))
              )
            } */}

            {
              (centres.map(centre => 
                  avalanche === centre.roles.avalanche ? <CentreItem key={centre._id} centre={centre} staffs={staffs}/> :
                  earthquake === centre.roles.earthquake ? <CentreItem key={centre._id} centre={centre} staffs={staffs}/> :
                  fire === centre.roles.fire ? <CentreItem key={centre._id} centre={centre} staffs={staffs}/> :
                  flood === centre.roles.flood ? <CentreItem key={centre._id} centre={centre} staffs={staffs}/> :
                  hurricane === centre.roles.hurricane ? <CentreItem key={centre._id} centre={centre} staffs={staffs}/> : null 
              ))
            }

          </tbody>
        </table>
      </Row>
    </Row>
  )
}

FilteredCentres.propTypes = {
  getCentres: propTypes.func.isRequired,
  centre: propTypes.object.isRequired,
  staff: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
  centre: state.centre,
  staff : state.staff
})

export default connect(mapStateToProps, { getCentres })(FilteredCentres);