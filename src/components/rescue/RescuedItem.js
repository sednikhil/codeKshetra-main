import propTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRescued } from '../../actions/rescue';
import EditRescued from './EditRescued';

const RescuedItem = ({
    auth,
    deleteRescued,
    rescue: { _id, centreid, name, age, gender, condition, date, photo} 
}) =>{

    const getCenterNameById = (centerId, centres) => {
        const foundCenter = centres.find(center => center._id === centerId);
        return foundCenter ? foundCenter.name : null;
      };
      
    const centre =  useSelector((state) => state.centre);
    const centreName= getCenterNameById(centreid,centre.centres);

    return (
    <tr>
        <td>{<Moment format='YYYY/MM/DD'>{date}</Moment>}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{condition}</td>
        <td>{centreName}</td>
        <td><Link to={`edit/${_id}`} element={<EditRescued />}><i className="fas fa-edit" /></Link></td>
        <td><i className="fas fa-trash" style={{color:"var(--danger-color)"}} onClick={() =>deleteRescued(_id)} /></td>
    </tr>
)};

RescuedItem.propTypes = {
    rescue: propTypes.object.isRequired,
    deleteRescued :propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {deleteRescued})(RescuedItem);