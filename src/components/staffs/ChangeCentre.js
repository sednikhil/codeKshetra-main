import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCentres } from '../../actions/centre';
import { changeStaffCentre, getStaffs } from '../../actions/staff';

const ChangeCentre = ({ getStaffs, getCentres, staff:{staffs}, centre:{centres}, changeStaffCentre}) => {

    useEffect(() => {
        getStaffs();
    }, [getStaffs]);

    useEffect(() => {
        getCentres();
    }, [getCentres]);

  const navigate = useNavigate();

  let firstCenter = centres.length > 0 ? centres[0]._id : "";
  let firstStaff = staffs.length > 0 ? staffs[0]._id : "";

  const [formData, setFormData] = useState({
    centreid: firstCenter,
    staffid: firstStaff,
  })

  const {
    centreid, staffid
   } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    changeStaffCentre(formData.staffid, formData.centreid, navigate);
  };

  return (
    <>
    <h3 style={{color:"var(--primary-color)", marginTop:'1rem'}}> Select Staff & Centre</h3>
    <br/>
    <div className="post-form" style={{marginLeft: '200px', marginRight: '200px'}}>
      <form className="form" onSubmit={ e => onSubmit(e)}>

        <label>Select Staff
          <select id="staffid" name="staffid" value={staffid} size="1" required onChange={e => onChange(e)}>
            {staffs.map(staff => (
              centres.map(centre => (staff.centreid === centre._id) &&
                <option value={staff._id.toString()}> {staff.name+" - "+centre.name} </option>
              ))
            )}
          </select>
        </label>
        
        <label>Select New Centre
          <select id="centreid" name="centreid" value={centreid} size="1" required onChange={e => onChange(e)}>
            {centres.map(centre => ( <option value={centre._id.toString()}> {centre.name} </option>))}
          </select>
        </label>
        <input type="submit" style={{marginTop: '1rem', marginBottom: '2rem'}} className="btn btn-primary" value="Change Centre" />
      </form>
    </div>
    </>
  )
}

ChangeCentre.propTypes = {
  centre: propTypes.object.isRequired,
  staff: propTypes.object.isRequired,
  getCentres: propTypes.func.isRequired,
  getStaffs: propTypes.func.isRequired,
  changeStaffCentre: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  staff: state.staff,
  centre: state.centre,
});

export default connect(mapStateToProps, { getStaffs, getCentres, changeStaffCentre})(ChangeCentre);