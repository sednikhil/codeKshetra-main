import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCentres } from '../../actions/centre';
import { addRescued } from '../../actions/rescue';

const AddRescued = ({ addRescued, getCentres, centre: {centres} })=>{
    const navigate = useNavigate();

    useEffect(() => {
        getCentres();
    }, [getCentres]);

    const [formData, setFormData] = useState({
        centreid: "",
        name: "",
        gender: "male",
        age: "",
        condition: "normal",
        // photo: "",
    });

    const {
        centreid,name,gender,age,condition
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        addRescued(formData, navigate);
    };

    return (
        <>
        <h3 style={{color:"var(--primary-color)", marginTop:'1rem'}}> Enter Rescued Person's Information</h3>
            <br/><br/>
            <div className="post-form" style={{marginLeft: '200px', marginRight: '200px'}}>
            <form className="form" onSubmit={e => onSubmit(e)}>

                <label>Centre:
                    <select centreid="centreid" name="centreid" value={centreid} size="1" required onChange={e => onChange(e)}>
                        {centres.map(centre => ( <option value={centre._id.toString()}> {centre.name} </option>))}
                    </select>
                </label>

                <label>Name:<input type='text' placeholder='Enter name' name="name" value={name} required onChange={e => onChange(e)} /></label>

                <label>Gender: 
                    <select id="gender" name="gender" value={gender} size="1" required onChange={e => onChange(e)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                </label>

                <label>Age:<input type='number' placeholder='Enter age' name="age" value={age} required onChange={e => onChange(e)} /></label>
                
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

AddRescued.propTypes = {
    addRescued: propTypes.func.isRequired,
    getCentres: propTypes.func.isRequired,
    center: propTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    centre: state.centre
});

export default connect(mapStateToProps, {addRescued, getCentres})(AddRescued);
