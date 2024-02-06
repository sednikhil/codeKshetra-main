import React from 'react'

function LandingFooter() {
    return (
        <div className='footerClass'>
            <footer className="footer-area" >
                <div className="footer-widget">
                    <div className="container">
                        <div className="row footer-widget-wrapper pt-100 pb-70">
                            <div className="col-md-6 col-lg-6">
                                <div className="footer-widget-box about-us">
                                    <a href="#" className="footer-logo">
                                        <img src="assets/img/logo/logo-light.png" alt="" />
                                    </a>
                                    <p className="mb-3">
                                    <i>"Bharat Rescue is a dedicated initiative, passionately committed to safeguarding precious lives across our great nation."</i>
                                    </p>
                                    <ul className="footer-contact">
                                        <li><a href="tel:+21236547898"><i className="far fa-phone"></i>+91 7004515255</a></li>
                                        <li><i className="far fa-map-marker-alt"></i>R-11 Rashtriya Marg, New Delhi-11</li>
                                        <li><a href="mailto:info@example.com"><i className="far fa-envelope"></i>bharatrescue@bharat.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title mt-3">Quick Links</h4>
                                    <ul className="footer-list">
                                        <li><a href="#"><i className="fas fa-caret-right"></i> About Us</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> FAQ's</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> Testimonials</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> Terms Of Service</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> Privacy policy</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right"></i> Update News</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="align-self-center mb-3" style={{textAlign:"center"}}>
                        <p className="copyright-text">
                            © Copyright <span id="date">2023</span> <a href="#"> Bharat Rescue </a> All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingFooter
