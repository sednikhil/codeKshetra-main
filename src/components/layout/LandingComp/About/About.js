import React from 'react'

function About() {
  return (
    <div>
      <div className="about-area py-120">
                <div className="container">
                    <div className="row align-items-center">
                    
                        <div className="col-lg-6">
                            <div className="about-left wow fadeInLeft" data-wow-delay=".25s"
                                style={{ visibility: "visible", animationDelay: "0.25s", animationName: "fadeInLeft" }}>
                                <div className="centres-img">
                                    {/* <img src="https://www.providentins.com/wp-content/uploads/2019/02/iStock_1088438_LARGE.jpg" alt="" style={{width:"400px"}}/> */}
                                    {/* <img src="" alt="Centres" style={{width:"400px"}}/> */}

                                </div>
                                {/* <div className="about-experience">
                                    <div className="about-experience-icon">
                                        <img src="assets/img/icon/fire-truck.svg" alt="" />
                                    </div>
                                    <b className="text-start" style={{color:"white"}}>30 Years <br /> Of Experience</b>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-right wow fadeInRight" data-wow-delay=".25s"
                                style={{ visibility: "visible", animationDelay: "0.25s", animationName: "fadeInRight" }}>
                                <div className="site-heading mb-3">
                                    <a href="/centremap">
                                        <button style={{width: '100%'}} className="btn btn-danger"><div style={{fontSize:'1.6rem',fontWeight:'600'}}>LOCATE CENTRES</div></button>
                                    </a>
                                    <hr/>
                                    <h1 className="site-title">
                                        Bharat Rescue <span style={{color:"var(--primary-color)"}}>is Dedicated</span> For Saving Your Lives
                                    </h1>
                                </div>
                                <p className="about-text">
                                At the heart of our mission lies a profound sense of responsibility and unwavering dedication to the welfare of our fellow citizens. With a strong focus on disaster management, we tirelessly strive to prepare, respond, and recover in the face of adversity. Our team comprises experienced professionals and volunteers who work tirelessly to ensure that when disaster strikes, help is swift and efficient. We believe that together, with unity and resilience, we can overcome any challenge that comes our way. At Bharat Rescue, we stand as a beacon of hope, ready to extend a helping hand when our nation needs it the most.
                                </p>
                                <div className="about-list-wrapper">
                                    <ul className="about-list list-unstyled">
                                        {/* <li>
                                            At vero eos et accusamus et iusto odio.
                                        </li>
                                        <li>
                                            Established fact that a reader will be distracted.
                                        </li>
                                        <li>
                                            Sed ut perspiciatis unde omnis iste natus sit.
                                        </li> */}
                                    </ul>
                                </div>
                                {/* <a href="about.html" className="theme-btn mt-4">Discover More<i className="fas fa-arrow-right"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About
