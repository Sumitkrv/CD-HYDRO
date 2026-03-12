import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="section-dark">
                <div className="container relative z-2">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-sm-6">
                            <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
                                <img src="/assets/images/background/CD Hydro Power logo-01.png" alt="CD HYDRO" style={{height: '50px', width: 'auto'}} />
                                <span style={{fontSize: '24px', fontWeight: '700', color: '#fff', letterSpacing: '0.5px'}}>CD HYDRO</span>
                            </Link>
                            <div className="spacer-20"></div>
                            <p>CD Hydro is shaping the clean energy landscape with hydroelectric innovation that supports India's green hydrogen ambitions, advances deep decarbonization, and moves the nation closer to net-zero by 2070.</p>

                            <div className="social-icons mb-sm-30">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-5 col-sm-12 order-lg-1 order-sm-2">
                            <div className="row">
                                <div className="col-lg-7 col-sm-6">
                                    <div className="widget">
                                        <h5>Our Services</h5>
                                        <ul>
                                            <li><Link to="/services">Hydroelectric Power Plants</Link></li>
                                            <li><Link to="/services">Green Hydrogen Production</Link></li>
                                            <li><Link to="/services">Renewable Energy Infrastructure</Link></li>
                                            <li><Link to="/services">Grid Stability Solutions</Link></li>
                                            <li><Link to="/services">Climate Resilience Projects</Link></li>
                                            <li><Link to="/services">Deep Decarbonization Systems</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-sm-6">
                                    <div className="widget">
                                        <h5>Company</h5>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/services">Our Services</Link></li>
                                            <li><Link to="/projects">Projects</Link></li>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 order-lg-2 order-sm-1">
                            <div className="widget">
                                <h5>Contact Us</h5>

                                <div className="fw-bold text-white d-flex align-items-center">
                                    <i className="fa-solid fa-location-dot me-2 id-color"></i><span>Head Office</span>
                                </div>
                                15A/14, East Patel Nagar, New Delhi – 110008

                                <div className="spacer-20"></div>

                                <div className="fw-bold text-white d-flex align-items-center">
                                    <i className="fa-solid fa-phone me-2 id-color"></i><span>Call Us</span>
                                </div>
                                +91 98925 45039

                                <div className="spacer-20"></div>

                                <div className="fw-bold text-white d-flex align-items-center">
                                    <i className="fa-solid fa-envelope me-2 id-color"></i><span>Email Us</span>
                                </div>
                                info@cdhydro.in
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subfooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="de-flex">
                                    <div className="de-flex-col">
                                        © 2025 CD Hydro Pvt. Ltd. All Rights Reserved. Website designed & managed by Consider Done
                                    </div>
                                    <ul className="menu-simple">
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="abs w-50 end-0 bottom-0 op-3">
                    <img src="/assets/images/misc/c1.webp" className="w-100 rtl-hide wow fadeInRight" data-wow-duration="2s" alt="" />
                    <img src="/assets/images/misc/c1-flip.webp" className="w-100 rtl-show wow fadeInLeft" data-wow-duration="2s" alt="" />
                </div>
            </footer>

            <div id="extra-wrap" className="text-light">
                <div id="btn-close">
                    <span></span>
                    <span></span>
                </div>

                <div id="extra-content">
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <img src="/assets/images/background/CD Hydro Power logo-01.png" alt="CD HYDRO" style={{height: '40px'}} />
                        <span style={{fontSize: '22px', fontWeight: '700', color: '#fff', letterSpacing: '0.5px'}}>CD HYDRO</span>
                    </div>

                    <div className="spacer-30-line"></div>

                    <h5>Our Services</h5>
                    <ul className="ul-check">
                        <li>Hydroelectric Power Plants</li>
                        <li>Green Hydrogen Production</li>
                        <li>Renewable Energy Infrastructure</li>
                        <li>Grid Stability Solutions</li>
                        <li>Climate Resilience Projects</li>
                        <li>Deep Decarbonization Systems</li>
                    </ul>

                    <div className="spacer-30-line"></div>

                    <h5>Contact Us</h5>
                    <div><i className="fa-solid fa-clock me-2 op-5"></i>Monday - Friday 08.00 - 18.00</div>
                    <div><i className="fa-solid fa-location-dot me-2 op-5"></i>15A/14, East Patel Nagar, New Delhi – 110008</div>
                    <div><i className="fa-solid fa-envelope me-2 op-5"></i>info@cdhydro.in</div>

                    <div className="spacer-30-line"></div>

                    <h5>About Us</h5>
                    <p>CD Hydro is shaping the clean energy landscape with hydroelectric innovation that supports India's green hydrogen ambitions, advances deep decarbonization, and moves the nation closer to net-zero by 2070.</p>

                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
