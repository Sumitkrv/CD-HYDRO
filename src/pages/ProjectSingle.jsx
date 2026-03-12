import { Link } from 'react-router-dom';

function ProjectSingle() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/3.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Residential Solar Installation</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li className="active">Project Details</li>
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
            <div className="col-lg-8">
              <img src="/assets/images/project-single/1.webp" className="img-fluid rounded mb-3 wow fadeInUp" alt="" />

              <h3 className="wow fadeInUp">Project Overview</h3>
              <p className="wow fadeInUp">This residential solar installation project showcases our commitment to delivering high-quality, efficient solar solutions. Located in San Diego, California, this 8.5 kW system was designed to meet the homeowner's energy needs while maximizing savings.</p>

              <p className="wow fadeInUp">The project involved installing 24 premium solar panels on a south-facing roof with optimal sun exposure. Our team completed the installation in just two days with minimal disruption to the homeowner's daily routine.</p>

              <div className="spacer-20"></div>

              <h3 className="wow fadeInUp">Client Goals</h3>
              <ul className="list-style-1 wow fadeInUp">
                <li>Reduce monthly electricity bills by at least 80%</li>
                <li>Minimize environmental impact and carbon footprint</li>
                <li>Achieve energy independence from the utility grid</li>
                <li>Increase property value with a modern solar system</li>
                <li>Take advantage of federal and state tax incentives</li>
              </ul>

              <div className="spacer-20"></div>

              <h3 className="wow fadeInUp">Results Achieved</h3>
              <p className="wow fadeInUp">The system has been operational for 6 months and has exceeded expectations:</p>
              <ul className="list-style-1 wow fadeInUp">
                <li>87% reduction in electricity bills (saving $220/month average)</li>
                <li>Generated 6,500 kWh of clean energy in first 6 months</li>
                <li>Offset 4.5 tons of CO2 emissions</li>
                <li>Qualified for $2,550 federal tax credit (30% ITC)</li>
                <li>System is projected to pay for itself in 7.5 years</li>
              </ul>

              <div className="spacer-20"></div>

              <h3 className="wow fadeInUp">Project Gallery</h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <img src="/assets/images/project-single/2.webp" className="img-fluid rounded wow fadeInUp" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="/assets/images/project-single/3.webp" className="img-fluid rounded wow fadeInUp" data-wow-delay=".1s" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="/assets/images/project-single/4.webp" className="img-fluid rounded wow fadeInUp" data-wow-delay=".2s" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="de-box mb-3 wow fadeInRight">
                <h4>Project Details</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span><i className="fa-solid fa-calendar-days me-2 id-color"></i>Date:</span>
                  <span>June 2023</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><i className="fa-solid fa-location-dot me-2 id-color"></i>Location:</span>
                  <span>San Diego, CA</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><i className="fa-solid fa-tag me-2 id-color"></i>Category:</span>
                  <span>Residential</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><i className="fa-solid fa-bolt me-2 id-color"></i>System Size:</span>
                  <span>8.5 kW</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span><i className="fa-solid fa-clock me-2 id-color"></i>Duration:</span>
                  <span>2 Days</span>
                </div>
              </div>

              <div className="de-box mb-3 wow fadeInRight" data-wow-delay=".1s">
                <h4>System Specifications</h4>
                <p className="mb-2"><strong>Panels:</strong> 24x LG NeON 2 (350W each)</p>
                <p className="mb-2"><strong>Inverter:</strong> SolarEdge SE7600H-US</p>
                <p className="mb-2"><strong>Mounting:</strong> IronRidge XR100 Rail System</p>
                <p className="mb-2"><strong>Monitoring:</strong> SolarEdge Monitoring Platform</p>
                <p className="mb-0"><strong>Warranty:</strong> 25-Year Panel, 12-Year Inverter</p>
              </div>

              <div className="de-box mb-3 wow fadeInRight" data-wow-delay=".2s">
                <h4>Client Testimonial</h4>
                <p className="mb-3">"The CD HYDRO team was professional from start to finish. Our energy bills have dropped dramatically, and we're proud to be contributing to a cleaner environment."</p>
                <p className="mb-0"><strong>- Michael & Sarah Thompson</strong></p>
              </div>

              <div className="de-box wow fadeInRight" data-wow-delay=".3s">
                <h4>Interested in Solar?</h4>
                <p className="mb-3">Get a free consultation and custom quote for your property.</p>
                <Link to="/get-a-quote" className="btn-main w-100">Get A Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-light pt-60 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-relative">
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

export default ProjectSingle;
