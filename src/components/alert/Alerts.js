import propTypes from "prop-types";
import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import Moment from "react-moment";
import { connect } from "react-redux";
import { getAlerts } from "../../actions/alert";

const Alerts = ({ getAlerts, alert: { alerts } }) => {
  useEffect(() => {
    getAlerts();
  }, [getAlerts]);

  return (
    <>
      <div className="my-top-banner"></div>
      <div className="mycontainer">
        <h1 className="text-primary large">Alerts</h1>
        <hr />
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
                <td>Date</td>
                <td>Priority</td>
                <td>Message</td>
                {/* <td>Download</td> */}
              </tr>
            </thead>
            <tbody>
              {alerts.length > 0 ? (
                alerts.map(({ _id, date, priority, message }) => (
                  <tr key={_id}>
                    <td>
                      <Moment format="YYYY/MM/DD">{date}</Moment>
                    </td>
                    <td>
                      {priority === "high"
                        ? "High"
                        : priority === "low"
                        ? "Low"
                        : "Medium"}
                    </td>
                    <td>{message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} style={{ fontWeight: "300" }}>
                    No Alerts
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

Alerts.propTypes = {
  getAlerts: propTypes.func.isRequired,
  alert: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, { getAlerts })(Alerts);
