import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light relative jarallax">
        <img src="/assets/images/background/w2.webp" className="jarallax-img" alt="" />
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Our Service</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Our Services</li>
              </ul>   
            </div>
          </div>
        </div>

        <div className="gradient-edge-bottom h-50"></div>
        <div className="sw-overlay"></div>
      </section>
       
      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/1.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>Solar Panel Installation</h4>
                    <p className="mb-0">Fast, safe, and certified installation by experienced technicians.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/2.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>Solar Panel Maintenance</h4>
                    <p className="mb-0">Ensure peak performance with regular inspections and cleaning.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/3.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>Custom System Design</h4>
                    <p className="mb-0">We create efficient solar setups tailored to your energy goals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/4.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>Solar Battery Storage</h4>
                    <p className="mb-0">Capture and store surplus solar energy for use anytime, even during outages.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/5.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>System Monitoring & Reporting</h4>
                    <p className="mb-0">Track performance in real time and get detailed system health reports.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/6.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>Solar Panel Upgrades</h4>
                    <p className="mb-0">Boost energy output and efficiency with the latest panel technology.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-light pt-60 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="relative">
                <div className="row g-4 grid-divider sm-hide">
                  <div className="col-lg-4 col-md-6 mb-sm-30">
                    <div className="d-flex justify-content-center">
                      <i className="fs-60 id-color fa-solid fa-phone"></i>
                      <div className="ms-3">
                        <h4 className="mb-0">Need Our Services?</h4>
                        <p>Call: +1 800 987 654</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 mb-sm-30">
                    <div className="d-flex justify-content-center">
                      <i className="fs-60 id-color fa-solid fa-clock"></i>
                      <div className="ms-3">
                        <h4 className="mb-0">Work Hours</h4>
                        <p>Mon to Sat 08:00 - 17:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-sm-30">
                    <div className="d-flex justify-content-center">
                      <i className="fs-60 id-color fa-solid fa-envelope"></i>
                      <div className="ms-3">
                        <h4 className="mb-0">Email Us</h4>
                        <p>info@cdhydro.in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
