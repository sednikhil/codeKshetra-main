import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCentres } from '../../actions/centre';
import CentreItem from './CentreItem';

const AllCentres = ({
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
        <Col><p>All Centres</p></Col>
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
              <td>View</td>
              <td>Map</td>
              {/* <td>Edit</td> */}
            </tr>
          </thead>
          <tbody>
            {
              centres.map(centre => (
                  <CentreItem key={centre._id} centre={centre} staffs={staffs}/>
              ))
            }

          </tbody>
        </table>
      </Row>
    </Row>
  )
}

AllCentres.propTypes = {
  getCentres: propTypes.func.isRequired,
  centre: propTypes.object.isRequired,
  staff: propTypes.object.isRequired,
};

const mapStateToProps = state => ({
  centre: state.centre,
  staff : state.staff
})

export default connect(mapStateToProps, { getCentres })(AllCentres);