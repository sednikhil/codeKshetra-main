import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllHelplines } from '../../actions/helpline';
import HelplineItem from './HelplineItem';

const AllHelplines = ({
    auth,
    getAllHelplines,
    helpline: {helplines},
  showActions
}) => {

  useEffect(() => {
    getAllHelplines();
  }, [getAllHelplines]);

  return (
    <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
    <table style={{marginTop: '2rem'}} className='table'>
      <thead>
        <tr>
          <td>Name</td>
          <td>Designation</td>
          <td>Contact</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {helplines.map(helpline => (
            <HelplineItem key={helpline._id} helpline={helpline} />
        ))}
                  
      </tbody>
    </table>
    </Row>
  )
}

AllHelplines.propTypes = {
  getAllHelplines: propTypes.func.isRequired,
  helpline: propTypes.object.isRequired
};

const mapStateToProps = state => ({
    helpline: state.helpline
  })

export default connect(mapStateToProps, { getAllHelplines })(AllHelplines);
