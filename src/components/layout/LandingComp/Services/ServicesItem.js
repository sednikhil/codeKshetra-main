import React from 'react'

function ServicesItem(props) {
  return (
    <div>
            
            <div className="service-item wow fadeInUp" data-wow-delay=".25s">
              <div className="service-img">
                <img src="assets/img/service/01.jpg" alt="" />
                <div className="service-icon">
                  <img src={props.imgSrc} style={{height:"15vw"}} alt="" />
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">{props.title}</a>
                </h3>
                <p className="service-text">
                  {props.content}
                </p>
                <div className="service-arrow">
                  <a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default ServicesItem
