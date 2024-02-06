import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMapCentres } from '../../actions/map';
import MapComponent from './MapComponent';

const MapCentres = ({getMapCentres, map}) => {
    useEffect(() => {
        getMapCentres();
    },[getMapCentres]);

    return (
        <div className='mycontainer'  >
            {
                map && map.mapcentres &&
                <Row style={{}}>
                    <Row><h3 className='text-center text-primary'>RESCUE CENTRES</h3></Row>
                    <Row><MapComponent mapCentres={map.mapcentres} /></Row>
                </Row>
            }
        </div>
        
    )
}

MapCentres.propTypes = {
    getMapCentres: propTypes.func.isRequired,
    map: propTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    map: state.map
});

export default connect(mapStateToProps,{getMapCentres})(MapCentres);