import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div id="logo">
                                    <Link to="/" style={{fontSize: '28px', fontWeight: '700', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px'}}>
                                        <img src="/assets/images/background/CD Hydro Power logo-01.png" alt="CD HYDRO" style={{height: '45px'}} />
                                        <span>CD HYDRO</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li><a className="menu-item" href="#">Home</a>
                                        <ul>
                                            <li><Link to="/">Homepage 1</Link></li>
                                            <li><Link to="/homepage-2">Homepage 2</Link></li>
                                            <li><Link to="/homepage-3">Homepage 3</Link></li>
                                            <li><Link to="/homepage-4">Homepage 4</Link></li>
                                            <li><Link to="/homepage-5">Homepage 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="#">Services</a>
                                        <ul>
                                            <li><Link to="/services">All Services Style 1</Link></li>
                                            <li><Link to="/services-2">All Services Style 2</Link></li>
                                            <li><Link to="/service-single">Service Single</Link></li>
                                            <li><Link to="/industries">Industries We Serve</Link></li>
                                            <li><Link to="/service-area">Service Area</Link></li>
                                            <li><Link to="/how-it-works">How It Works</Link></li>
                                            <li><Link to="/faq">FAQ</Link></li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="#">Projects</a>
                                        <ul>
                                            <li><Link to="/projects">Projects Default</Link></li>
                                            <li><Link to="/projects-slider">Projects Slider</Link></li>
                                            <li><Link to="/projects-carousel">Projects Carousel</Link></li>
                                            <li><Link to="/project-single">Project Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><a className="menu-item" href="#">Pages</a>
                                        <ul>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/team">Our Team</Link></li>
                                            <li><Link to="/careers">Careers</Link></li>
                                            <li><Link to="/testimonials">Testimonials</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" to="/blog">Blog</Link></li>
                                    <li><Link className="menu-item" to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                                <div className="menu_side_area">
                                    <Link to="/get-a-quote" className="btn-main btn-line fx-slide hover-white"><span>Get a Quote</span></Link>
                                    <span id="menu-btn"></span>
                                </div>

                                <div id="btn-extra">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
