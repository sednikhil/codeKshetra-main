import React from 'react'

function CountBanner() {
  return (
    <div>
      <div className="counter-area pt-40 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src="assets/img/icon/fire-truck.svg" alt="" />
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="5000" data-speed="3000">500</span>
                  <h6 className="title">+ Rescues</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src="assets/img/icon/property.svg" alt="" />
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="90" data-speed="3000">90</span>
                  <h6 className="title">+ Rescue Centres</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src="assets/img/icon/firefighter-man.svg" alt="" />
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="1500" data-speed="3000">6000</span>
                  <h6 className="title">+ our Rescue Team</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src="assets/img/icon/firefighter-1.svg" alt="" />
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="30" data-speed="3000">20</span>
                  <h6 className="title">+ Years of Saving Lives</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountBanner
