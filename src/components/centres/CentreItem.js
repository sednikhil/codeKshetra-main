import propTypes from 'prop-types';
import React, { useState } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteCentre } from '../../actions/centre';
import CentrePopup from './CentrePopup';
import EditCentre from './EditCentre';

const CentreItem = ({
    auth,
    deleteCentre,
    centre: {_id, date, name, chiefname, emergency, active, address, roles, transport, location, beds, contact, medical, food, fuel, rescuecount, refugeecount},
    staffs,
    showActions
}) => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return(
    <tr>
        <>
            <td style={{textAlign:'center'}}><Moment format='YYYY/MM/DD'>{date}</Moment></td>
            <td>{name}</td>
            <td>{chiefname}</td>
            <td>{contact}</td>
            <td className="text-center">{emergency.length > 0 ?<>Yes - {emergency.length}</> : 'No'}</td>
            <td className='text-center'>{active===true?"Yes" : "No"}</td>
            
        </>

        {isOpen && <CentrePopup
            content={
                <>
                <table style={{marginTop: '1rem'}} className='popup-application-item'>
                    <tbody>
                        <tr>
                            <td>
                            <tr><td>Date</td><td>{<Moment format='YYYY/MM/DD'>{date}</Moment>}</td></tr>
                            <tr><td>Active</td><td>{active===true ? ('Yes') : ('No')}</td></tr>
                            <tr><td>Centre Name</td><td>{name}</td></tr>
                            <tr><td>Chief Name</td><td>{chiefname}</td></tr>
                            <tr><td>Contact</td><td>{contact}</td></tr>
                            <tr><td>Location</td><td>{"long: "+location.coordinates[0]+", lat: "+location.coordinates[1]}</td></tr>
                            <tr><td>Emergency</td><td>{emergency.length > 0 ?<>Yes - {emergency.length}</> : 'No'}</td></tr>
                            <tr><td>Address</td><td>{address.locality+","+address.city+","+address.state+","+address.pincode}</td></tr>
                            <tr><td>Roles</td><td>{
                                (roles.fire===true ? "Fire, " : "")+
                                (roles.flood===true ? "Flood, " : "")+
                                (roles.earthquake===true ? "Earthquake, " : "")+
                                (roles.hurricane===true ? "Hurricane, " : "")+
                                (roles.avalanche===true ? "Avalanche" : "")
                            }</td></tr>
                            <tr><td>Roles</td><td>{
                                (transport.air===true ? "Air, ":"")+
                                (transport.water===true ? "Water, ":"")+
                                (transport.land===true ? "Land":"")+" Mode"
                            }</td></tr>
                            <tr><td>Beds</td><td>{beds.available+"/"+beds.total+" Available"}</td></tr>
                            <tr><td>Medical</td><td>{medical===true ? ('Yes') : ('No')}</td></tr>
                            <tr><td>Food</td><td>{food+" Units"}</td></tr>
                            <tr><td>Fuel</td><td>{fuel+" Units"}</td></tr>
                            <tr><td>Rescues</td><td>{rescuecount}</td></tr>
                            <tr><td>Refugees</td><td>{refugeecount}</td></tr>
                            </td>
                            <td>
                                Centre Staffs
                                <table style={{marginTop: '1rem'}} className='popup-application-item'>
                                    <tbody>
                                        {staffs.map(staff => staff.centreid===_id && 
                                        <tr>
                                            <td>{staff.name}</td>
                                            <td>{staff.email}</td>
                                            {/* <td><i className='fas fa-trash' style={{color: 'red'}} onClick={() => removeStudent(_id, studentid1, navigate)}></i></td> */}
                                        </tr>
                                        )}
                                    </tbody>

                                </table>

                            </td>

                        </tr>
                    </tbody>
                </table>
                <td><i className="fas fa-trash" style={{color:'var(--danger-color)'}} onClick={() => deleteCentre(_id, navigate)}></i> {' '} Delete Centre</td>
                
                </>
            }
            handleClose={togglePopup}
        />
        }
        <td style={{textAlign: 'center'}}><i className='fas fa-eye' onClick={togglePopup} style={{color:'var(--primary-color)'}}></i></td>
        <td style={{textAlign: 'center'}}>
            <a href={'https://www.google.com/maps?q='+location.coordinates[1]+','+location.coordinates[0]} target="_blank" rel='noreferrer noopener' >
                <i className='fas fa-map-marked-alt' style={{color:'var(--success-color)'}}/>
            </a>
        </td>
        <td className='text-center' >
            {/* <Link to={`edit/edit-centre/${_id}`}><i className='fas fa-pen-to-square' style={{color:"var(--danger-color"}} /></Link> */}
            <Link to={`edit/${_id}`} element={<EditCentre />}><i className="fas fa-edit" style={{color:"var(--danger-color"}} /></Link>
        </td>
    </tr>
)};

CentreItem.defaultProps = {
  showActions: true
};

CentreItem.propTypes = {
    centre: propTypes.object.isRequired,
    auth: propTypes.object.isRequired,
    deleteCentre: propTypes.func.isRequired,
    showActions: propTypes.bool
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteCentre })(
    CentreItem
);