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
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Run-of-River Hydro Development</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
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
              <img src="/assets/images/background/1.webp" className="img-fluid rounded mb-3 wow fadeInUp" alt="" />

              <h3 className="wow fadeInUp">Project Overview</h3>
              <p className="wow fadeInUp">This run-of-river hydro project demonstrates our focus on reliable, low-carbon infrastructure. Located in Uttarakhand, India, the plant was engineered to deliver dependable renewable power to local and regional loads.</p>

              <p className="wow fadeInUp">The scope included intake and civil works, turbine-generator installation, control systems, and synchronized grid interconnection. Execution was staged to maintain safety and environmental compliance throughout.</p>

              <div className="spacer-20"></div>

              <h3 className="wow fadeInUp">Client Goals</h3>
              <ul className="list-style-1 wow fadeInUp">
                <li>Add stable renewable capacity to the regional grid</li>
                <li>Reduce lifecycle emissions and fossil dependence</li>
                <li>Improve year-round grid reliability in the district</li>
                <li>Enable long-term clean-energy economics</li>
                <li>Deliver safe and compliant infrastructure execution</li>
              </ul>

              <div className="spacer-20"></div>

              <h3 className="wow fadeInUp">Results Achieved</h3>
              <p className="wow fadeInUp">The plant has been operational for 6 months and has exceeded expectations:</p>
              <ul className="list-style-1 wow fadeInUp">
                <li>Delivered high-availability renewable generation to the local grid</li>
                <li>Improved supply stability during evening peak demand windows</li>
                <li>Reduced carbon-intensive power procurement requirements</li>
                <li>Achieved targeted commissioning and compliance milestones</li>
                <li>Established a strong baseline for future hydro expansion</li>
              </ul>

              <div className="spacer-20"></div>

              <h3 className="wow fadeInUp">Project Gallery</h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <img src="/assets/images/background/2.webp" className="img-fluid rounded wow fadeInUp" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="/assets/images/background/3.webp" className="img-fluid rounded wow fadeInUp" data-wow-delay=".1s" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="/assets/images/background/4.webp" className="img-fluid rounded wow fadeInUp" data-wow-delay=".2s" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="de-box mb-3 wow fadeInRight">
                <h4>Project Details</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span><i className="fa-solid fa-calendar-days me-2 id-color"></i>Date:</span>
                  <span>June 2025</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><i className="fa-solid fa-location-dot me-2 id-color"></i>Location:</span>
                  <span>Uttarakhand, India</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><i className="fa-solid fa-tag me-2 id-color"></i>Category:</span>
                  <span>Run-of-River Hydro</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span><i className="fa-solid fa-bolt me-2 id-color"></i>System Size:</span>
                  <span>12 MW</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span><i className="fa-solid fa-clock me-2 id-color"></i>Duration:</span>
                  <span>14 Months</span>
                </div>
              </div>

              <div className="de-box mb-3 wow fadeInRight" data-wow-delay=".1s">
                <h4>System Specifications</h4>
                <p className="mb-2"><strong>Turbine Type:</strong> Francis Turbine</p>
                <p className="mb-2"><strong>Generator:</strong> 3-Phase Synchronous Generator</p>
                <p className="mb-2"><strong>Control System:</strong> SCADA-Integrated Plant Controls</p>
                <p className="mb-2"><strong>Grid Interface:</strong> 33kV Interconnection</p>
                <p className="mb-0"><strong>Design Life:</strong> Multi-Decade Asset Lifecycle</p>
              </div>

              <div className="de-box mb-3 wow fadeInRight" data-wow-delay=".2s">
                <h4>Client Testimonial</h4>
                <p className="mb-3">"CD HYDRO delivered a disciplined project from feasibility through commissioning. The plant now provides reliable clean power with strong operational performance."</p>
                <p className="mb-0"><strong>- Project Development Partner</strong></p>
              </div>

              <div className="de-box wow fadeInRight" data-wow-delay=".3s">
                <h4>Interested in Hydro?</h4>
                <p className="mb-3">Get a consultation and technical roadmap for your hydro project.</p>
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
