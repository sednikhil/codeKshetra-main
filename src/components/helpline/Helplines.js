import propTypes from "prop-types";
import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllHelplines } from "../../actions/helpline";

const Helplines = ({ getAllHelplines, helpline: { helplines } }) => {
  useEffect(() => {
    getAllHelplines();
  }, [getAllHelplines]);

  return (
    <>
      <div className="my-top-banner"></div>
      <div className="mycontainer">
        <h1 className="text-primary large">Helplines</h1>
        <hr style={{ marginLeft: "0rem", marginRight: "3rem" }} />

        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <table style={{ marginTop: "2rem" }} className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Designation</td>
                <td>Phone</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {helplines.length > 0 ? (
                helplines.map(({ _id, name, designation, contact, email }) => (
                  <tr key={_id}>
                    <td>{name}</td>
                    <td>{designation}</td>
                    <td>{contact}</td>
                    <td>{email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ fontWeight: "300" }}>
                    No Helplines
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Row>
      </div>
    </>
  );
};

Helplines.propTypes = {
  getAllHelplines: propTypes.func.isRequired,
  helpline: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  helpline: state.helpline,
});

export default connect(mapStateToProps, { getAllHelplines })(Helplines);
