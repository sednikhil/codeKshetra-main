import React from 'react';
import ServicesItem from './ServicesItem';
function Services() {
  return (
    <div className="service-area bg py-120">
      <div className="container">

        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline"><i className="far fa-fire-flame-curved"></i>Services</span>
              <h2 className="site-title">A Safer Community </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <ServicesItem title="Fire Fighting" content=" There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected." imgSrc="https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?cs=srgb&dl=pexels-pixabay-280076.jpg&fm=jpg" />
          </div>

          <div className="col-md-6 col-lg-4">
            <ServicesItem title="Flood Rescue and Shelter" content=" There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected." imgSrc="https://media.istockphoto.com/id/623826228/photo/flood-in-jakarta-indonesia.jpg?s=612x612&w=0&k=20&c=wDA_2yVWA9yXppFDg79W60q3qMFDxWaxCOYhFBOVR_o=" />
          </div>

          <div className="col-md-6 col-lg-4">
            <ServicesItem title="Earthquake" content="There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected." imgSrc="https://static.toiimg.com/photo/msid-97673203/97673203.jpg" />
          </div>

          <div className="col-md-6 col-lg-4">
            <ServicesItem title="LandSlide Support" content="There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected." imgSrc="https://ichef.bbci.co.uk/news/976/cpsprodpb/ECEB/production/_116415606_065133391-1.jpg" />
          </div>

          <div className="col-md-6 col-lg-4">
            <ServicesItem title="Cloud Burst Sheltering" content="There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected." imgSrc="https://images.hindustantimes.com/img/2022/08/25/1600x900/98d28c3e-24b1-11ed-95b4-abd850c77aa6_1661458126878.jpg" />
          </div>

          <div className="col-md-6 col-lg-4">
            <ServicesItem title="Drought" content="There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected." imgSrc="https://static.toiimg.com/thumb/msid-52223031,width-400,resizemode-4/52223031.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;