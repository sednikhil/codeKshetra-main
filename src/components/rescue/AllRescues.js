import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllRescues } from '../../actions/rescue';
import RescuedItem from './RescuedItem';

const AllRescues = ({
    auth,
    getAllRescues,
    rescued: { rescued },
    showActions
}) => {

    useEffect(() => {
        getAllRescues();
    }, [getAllRescues]);


    return (
        <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <table style={{ marginTop: '2rem' }} className='table'>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Condition</td>
                    <td>Centre</td>
                </tr>
            </thead>
            <tbody>
                {rescued.map(rescue => (<RescuedItem key={rescue._id} rescue={rescue} />))}
            </tbody>
        </table>
        </Row>
    )
}

AllRescues.propTypes = {
    getAllRescues: propTypes.func.isRequired,
    rescued: propTypes.object.isRequired
};

const mapStateToProps = state => ({
    rescued: state.rescued
})


export default connect(mapStateToProps, { getAllRescues })(AllRescues);
