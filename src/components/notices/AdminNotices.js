import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteNotice, downloadNotice, getNotices } from '../../actions/notice';

const AdminNotices = ({
  getNotices,
  downloadNotice,
  deleteNotice,
  notice: {notices}}
) => {

  useEffect(() => {
    getNotices();
  }, [getNotices]);

  return (
    <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
    <table style={{marginTop: '2rem'}} className='table'>
      <thead>
        <tr>
          <td>Date</td>
          <td>Title</td>
          {/* <td>Description</td> */}
          {/* <td>Download</td> */}
        </tr>
      </thead>
      <tbody>
          {notices.length > 0 ? (
            notices.map(
              ({ _id, title, ipfs_url,date}) => (
                <tr key={_id}>
                  <td><Moment format='YYYY/MM/DD'>{date}</Moment></td>
                  <td>{title}</td>
                  {/* <td>{description}</td> */}
                  <td style={{ textAlign: 'center' }}>
                    {/* <a
                      href="#/"
                      onClick={() =>
                        downloadNotice(_id, file_path, file_mimetype)
                      }
                    >
                      <i className='fas fa-download'/>
                    </a> */}
                    <a href={ipfs_url} download target='_blank' rel='noreferrer noopener'> <i className='fas fa-download'/> </a>
                  </td>
                  <td><i className='fas fa-trash' style={{ color: 'red'}} onClick={() => deleteNotice(_id)}/></td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan={4} style={{ fontWeight: '300' }}>
                No files found.
              </td>
            </tr>
          )}
      </tbody>
    </table>
    </Row>
  )
}

AdminNotices.propTypes = {
  getNotices: propTypes.func.isRequired,
  downloadNotice: propTypes.func.isRequired,
  deleteNotice: propTypes.func.isRequired,
  notice: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  notice: state.notice
})

export default connect( mapStateToProps , { getNotices, downloadNotice, deleteNotice })(AdminNotices);