import propTypes from "prop-types";
import React, { useEffect } from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { downloadNotice, getNotices } from "../../actions/notice";

const Notices = ({ getNotices, downloadNotice, notice: { notices } }) => {
  useEffect(() => {
    getNotices();
  }, [getNotices]);

  return (
    <>
      <div className="my-top-banner"></div>
      <div className="mycontainer">
        <h1 className="text-primary large">Notices</h1>
        <hr style={{ marginLeft: "0rem", marginRight: "3rem" }} />
        <table style={{ marginTop: "2rem" }} className="table">
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
                ({
                  _id,
                  title,
                  ipfs_url,
                  date,
                }) => (
                  <tr key={_id}>
                    <td>
                      <Moment format="YYYY/MM/DD">{date}</Moment>
                    </td>
                    <td>{title}</td>
                    {/* <td>{description}</td> */}
                    <td style={{ textAlign: "center" }}>
                      <a href={ipfs_url} download target='_blank' rel='noreferrer noopener'> <i className='fas fa-download'/> </a>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan={4} style={{ fontWeight: "300" }}>
                  No files found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

Notices.propTypes = {
  getNotices: propTypes.func.isRequired,
  downloadNotice: propTypes.func.isRequired,
  notice: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  notice: state.notice,
});

export default connect(mapStateToProps, { getNotices, downloadNotice })(
  Notices
);
