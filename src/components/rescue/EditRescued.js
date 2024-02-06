import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCentres } from '../../actions/centre';
import { editRescued, getAllRescues } from '../../actions/rescue';

const EditRescued = ({ editRescued, getCentres, getAllRescues, centre: {centres}, rescued:{rescued} })=>{
    const navigate = useNavigate();

    useEffect(() => {
        getCentres();
    }, [getCentres]);

    useEffect(() => {
        getAllRescues();
    }, [getAllRescues]);

    const url = window.location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);
    const currRescued = rescued.find(rescue => rescue._id === id);

    const [formData, setFormData] = useState({
        centreid: currRescued.centreid,
        name: currRescued.name,
        gender: currRescued.gender,
        age: currRescued.age,
        condition: currRescued.condition,
        photo: currRescued.photo,
    });

    const {
        centreid,name,gender,age,condition,photo
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        editRescued(currRescued._id, formData, navigate);
    };

    return (
        <>
        <h3 style={{color:"var(--primary-color)", marginTop:'1rem'}}> Edit Rescued Person's Information</h3>
            <br/><br/>
            <div className="post-form" style={{marginLeft: '200px', marginRight: '200px'}}>
            <form className="form" onSubmit={e => onSubmit(e)}>

                <label>Centre:
                    <select centreid="centreid" name="centreid" value={centreid} size="1" required onChange={e => onChange(e)}>
                        {centres.map(centre => ( <option value={centre._id.toString()}> {centre.name} </option>))}
                    </select>
                </label>

                <label>Name:<input type='text' placeholder='name' name="name" value={name} required onChange={e => onChange(e)} /></label>

                <label>Gender: 
                    <select id="gender" name="gender" value={gender} size="1" required onChange={e => onChange(e)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                </label>

                <label>Age:<input type='number' placeholder='age' name="age" value={age} required onChange={e => onChange(e)} /></label>
                
                <label>Condition: 
                    <select id="condition" name="condition" value={condition} size="1" required onChange={e => onChange(e)}>
                    <option value="normal">Normal</option>
                    <option value="injured">Injured</option>
                    <option value="critical">Critical</option>
                    </select>
                </label>

                <input type="submit" style={{ marginTop: '1rem', marginBottom: '2rem' }} className="btn btn-primary" value="Save Changes" />
            </form>
        </div>
        </>
    );

}

EditRescued.propTypes = {
    editRescued: propTypes.func.isRequired,
    getCentres: propTypes.func.isRequired,
    center: propTypes.object.isRequired,
    rescued: propTypes.object.isRequired,
    getAllRescues: propTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    centre: state.centre,
    rescued: state.rescued
});

export default connect(mapStateToProps, {editRescued, getCentres, getAllRescues})(EditRescued);
