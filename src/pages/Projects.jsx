import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/5.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Our Projects</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Projects</li>
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
            <div className="col-lg-12 text-center">
              <div className="subtitle wow fadeInUp mb-3">What We've Done</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Featured Projects</h2>
              <p className="lead wow fadeInUp" data-wow-delay=".3s">Explore our portfolio of successful solar installations across residential, commercial, and industrial sectors.</p>
            </div>
          </div>

          <div className="spacer-20"></div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="relative hover text-white">
                <Link className="d-block relative overflow-hidden text-white" to="/project-single">
                  <div className="absolute start-0 w-100 p-4" style={{top: "50%", transform: "translateY(-50%)", textShadow: "1px 1px 4px rgba(0,0,0,0.85)"}}>
                    <div className="relative z-2">
                      <h4 className="wow fadeIn">San Diego Residence</h4>
                      <p className="mb-0 wow fadeIn" data-wow-delay=".2s">8.5 kW Residential System</p>
                      <span className="btn-line white mt-3 wow fadeIn" data-wow-delay=".3s">View Details</span>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/projects/1.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="relative hover text-white">
                <Link className="d-block relative overflow-hidden text-white" to="/project-single">
                  <div className="absolute start-0 w-100 p-4" style={{top: "50%", transform: "translateY(-50%)", textShadow: "1px 1px 4px rgba(0,0,0,0.85)"}}>
                    <div className="relative z-2">
                      <h4 className="wow fadeIn">Tech Campus</h4>
                      <p className="mb-0 wow fadeIn" data-wow-delay=".2s">250 kW Commercial Installation</p>
                      <span className="btn-line white mt-3 wow fadeIn" data-wow-delay=".3s">View Details</span>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/projects/2.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="relative hover text-white">
                <Link className="d-block relative overflow-hidden text-white" to="/project-single">
                  <div className="absolute start-0 w-100 p-4" style={{top: "50%", transform: "translateY(-50%)", textShadow: "1px 1px 4px rgba(0,0,0,0.85)"}}>
                    <div className="relative z-2">
                      <h4 className="wow fadeIn">Manufacturing Facility</h4>
                      <p className="mb-0 wow fadeIn" data-wow-delay=".2s">500 kW Industrial System</p>
                      <span className="btn-line white mt-3 wow fadeIn" data-wow-delay=".3s">View Details</span>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/projects/3.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="relative hover text-white">
                <Link className="d-block relative overflow-hidden text-white" to="/project-single">
                  <div className="absolute start-0 w-100 p-4" style={{top: "50%", transform: "translateY(-50%)", textShadow: "1px 1px 4px rgba(0,0,0,0.85)"}}>
                    <div className="relative z-2">
                      <h4 className="wow fadeIn">Luxury Estate</h4>
                      <p className="mb-0 wow fadeIn" data-wow-delay=".2s">12 kW with Battery Storage</p>
                      <span className="btn-line white mt-3 wow fadeIn" data-wow-delay=".3s">View Details</span>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/projects/4.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="relative hover text-white">
                <Link className="d-block relative overflow-hidden text-white" to="/project-single">
                  <div className="absolute start-0 w-100 p-4" style={{top: "50%", transform: "translateY(-50%)", textShadow: "1px 1px 4px rgba(0,0,0,0.85)"}}>
                    <div className="relative z-2">
                      <h4 className="wow fadeIn">School District</h4>
                      <p className="mb-0 wow fadeIn" data-wow-delay=".2s">180 kW Educational Complex</p>
                      <span className="btn-line white mt-3 wow fadeIn" data-wow-delay=".3s">View Details</span>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/projects/5.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="relative hover text-white">
                <Link className="d-block relative overflow-hidden text-white" to="/project-single">
                  <div className="absolute start-0 w-100 p-4" style={{top: "50%", transform: "translateY(-50%)", textShadow: "1px 1px 4px rgba(0,0,0,0.85)"}}>
                    <div className="relative z-2">
                      <h4 className="wow fadeIn">Agricultural Farm</h4>
                      <p className="mb-0 wow fadeIn" data-wow-delay=".2s">75 kW Irrigation System</p>
                      <span className="btn-line white mt-3 wow fadeIn" data-wow-delay=".3s">View Details</span>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/projects/6.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-12 text-center">
              <div className="subtitle wow fadeInUp mb-3">Our Impact</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">By the Numbers</h2>
            </div>
          </div>

          <div className="spacer-20"></div>

          <div className="row g-4">
            <div className="col-lg-3 col-6">
              <div className="de-box text-center">
                <h2 className="id-color-2 mb-0 wow flipInX"><span className="timer" data-to="100000" data-speed="3000">0</span>+</h2>
                <span className="d-block">Solar Panels Installed</span>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="de-box text-center">
                <h2 className="id-color-2 mb-0 wow flipInX" data-wow-delay=".2s"><span className="timer" data-to="25000" data-speed="3000">0</span>+</h2>
                <span className="d-block">Homes Powered</span>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="de-box text-center">
                <h2 className="id-color-2 mb-0 wow flipInX" data-wow-delay=".4s"><span className="timer" data-to="850" data-speed="3000">0</span>+</h2>
                <span className="d-block">Projects Completed</span>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="de-box text-center">
                <h2 className="id-color-2 mb-0 wow flipInX" data-wow-delay=".6s"><span className="timer" data-to="98" data-speed="3000">0</span>%</h2>
                <span className="d-block">Customer Satisfaction</span>
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

export default Projects;
