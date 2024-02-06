import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getGuests } from '../../actions/guest';
import GuestItem from './GuestItem';

const AllGuests = ({
  guest: {guests}, getGuests
}) => {

  const [searchCard, setSearchCard] = useState("");
  
  useEffect(() => {
    getGuests();
  }, [getGuests]);

  return (
    <div>

      <div style={{display: 'flex'}}>
        <div style={{flex: '75%', paddingTop: '2rem'}}>
        </div>
        <div style={{flex: '25%', paddingTop: '2rem', paddingRight: '3rem'}}>
          <form className='form'>
            <input
                type="text"
                placeholder="Search users"
                value={searchCard}
                onChange={(e) => setSearchCard(e.target.value)}
            />
          </form>
        </div>
        
      </div>
      <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <table style={{marginTop: '2rem'}} className='table'>
        <thead>
          <tr>
            <td>Photo</td>
            <td>Name</td>
            <td>Email</td>
            <td>Sex</td>
            <td>DOB</td>
            <td>Contact</td>
            <td>Reg. Date</td>
          </tr>
        </thead>
        <tbody>
          {searchCard.length > 0 &&
            guests.length > 0 &&
            guests.map((guest) =>
              guest.name.toLowerCase().match(searchCard.toLowerCase()) ? (
                <GuestItem
                  key={guest._id}
                  guest={guest}
                />
              ) : (
                <></>
              )
            )
          }
          { searchCard.length === 0 &&
            guests.map(guest => (
              <GuestItem key={guest._id} guest={guest} />
            ))
          }
        </tbody>
      </table>
      </Row>
    </div>
  )
}

AllGuests.propTypes = {
  getGuests: propTypes.func.isRequired,
  guest: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  guest: state.guest
})

export default connect(mapStateToProps, { getGuests })(AllGuests);
