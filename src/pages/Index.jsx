import { Link } from 'react-router-dom';

function Index() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="section-hero" className="text-light position-relative vh-100 overflow-hidden">
        <video autoPlay loop muted playsInline className="position-absolute w-100 h-100" style={{objectFit: 'cover', top: 0, left: 0, zIndex: 0}}>
          <source src="/assets/video/1.mp4" type="video/mp4" />
        </video>

        <div className="position-absolute w-100 h-100 top-0 start-0" style={{background: "rgba(0,0,0,0.6)", zIndex: 1}}></div>

        <div className="container position-relative h-100 px-4" style={{zIndex: 2}}>
          <div className="row h-100 align-items-center">
            <div className="col-lg-8 col-md-10 col-12">
              <h1 className="mb-3 mb-md-4 wow fadeInUp" style={{fontSize: "clamp(28px, 6vw, 72px)", lineHeight: 1.1}}>
                Aligned with India's<br />
                2070 Net Zero Goal
              </h1>
              <p className="mb-3 mb-md-4 wow fadeInUp" data-wow-delay=".2s" style={{fontSize: "clamp(14px, 2.5vw, 18px)", lineHeight: 1.6}}>
                Shaping the clean energy landscape with hydroelectric innovation that supports India's green hydrogen ambitions, advances deep decarbonization, and moves the nation closer to net-zero.
              </p>
              <Link className="btn-main fx-slide wow fadeInUp" data-wow-delay=".4s" to="/get-a-quote"><span>Get Started</span></Link>
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h5 className="wow fadeInRight">About Us</h5>
            </div>
            <div className="col-lg-9">
              <h3 className="wow fadeInRight" data-wow-delay=".2s">India's energy demand is rising fast—and so is the urgency to cut emissions. Hydropower stands apart as a consistent, long-life source of renewable energy. <span className="op-3">In a world of energy volatility, hydro offers something rare: reliability, flexibility, and climate resilience.</span></h3>

              <div className="spacer-single"></div>

              <div className="row g-4 gx-5">
                <div className="col-md-3 col-sm-6">
                  <div className="de_count lh-1-6 wow fadeInRight" data-wow-delay=".2s">
                    <h3 className="fs-40 mb-0"><span className="timer" data-to="500" data-speed="3000">0</span>MW+</h3>
                    Hydroelectric Capacity
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="de_count lh-1-6 wow fadeInRight" data-wow-delay=".4s">
                    <h3 className="fs-40 mb-0"><span className="timer" data-to="50" data-speed="3000">0</span>K+</h3>
                    Clean Energy Projects
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="de_count lh-1-6 wow fadeInRight" data-wow-delay=".6s">
                    <h3 className="fs-40 mb-0"><span className="timer" data-to="20" data-speed="3000">0</span>+</h3>
                    Years of Expertise
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="border-top">
        <div className="container">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="position-relative overflow-hidden z-2 mb-5 rounded-1 mb-4 w-60 soft-shadow wow zoomIn"><img src="/assets/images/misc/p1.webp" className="w-100 wow scaleIn" data-wow-duration="1s" alt="" /></div>
                         
                <div className="position-absolute overflow-hidden top-0 end-0 mt-5 rounded-1 mb-4 w-60 wow zoomIn" data-wow-delay=".2s"><img src="/assets/images/misc/p2.webp" className="w-100 wow scaleIn" data-wow-duration="1s" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Green Hydrogen: Building the Energy Future</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Round-the-clock clean power <span className="op-3">without fossil backup</span></h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">Hydropower enables stability for a renewables-heavy grid, direct support for green hydrogen production, and real progress toward deep decarbonization. In a world of energy volatility, hydro offers something rare: reliability, flexibility, and climate resilience.</p>

              <div className="border-bottom mb-4"></div>

              <ul className="ul-check fw-600 mb-4 wow fadeInUp" data-wow-delay=".6s">
                <li>Round-the-clock clean power without fossil backup</li>
                <li>Stability for a renewables-heavy grid</li>
                <li>Direct support for green hydrogen production</li>
                <li>Real progress toward deep decarbonization</li>
              </ul>

              <Link className="btn-main fx-slide wow fadeInUp" data-wow-delay=".9s" to="/get-a-quote"><span>Get a Quote</span></Link>

            </div>
            
          </div>

        </div>
      </section>

      <section className="section-dark p-0" aria-label="section">
        <div className="bg-color text-white d-flex py-4 lh-1">
          <div className="de-marquee-list-2">
            <span className="fs-40 fw-600 mx-3">Hydroelectric Power</span>
            <span className="fs-40 fw-600 mx-3"><img src="/assets/images/background/CD Hydro Power logo-01.png" className="h-40px" style={{width: 'auto'}} alt="CD Hydro" /></span>
            <span className="fs-40 fw-600 mx-3">Green Hydrogen</span>
            <span className="fs-40 fw-600 mx-3"><img src="/assets/images/background/CD Hydro Power logo-01.png" className="h-40px" style={{width: 'auto'}} alt="CD Hydro" /></span>
            <span className="fs-40 fw-600 mx-3">Grid Stability</span>
            <span className="fs-40 fw-600 mx-3"><img src="/assets/images/background/CD Hydro Power logo-01.png" className="h-40px" style={{width: 'auto'}} alt="CD Hydro" /></span>
            <span className="fs-40 fw-600 mx-3">Climate Resilience</span>
            <span className="fs-40 fw-600 mx-3"><img src="/assets/images/background/CD Hydro Power logo-01.png" className="h-40px" style={{width: 'auto'}} alt="CD Hydro" /></span>
            <span className="fs-40 fw-600 mx-3">Net Zero 2070</span>
            <span className="fs-40 fw-600 mx-3"><img src="/assets/images/background/CD Hydro Power logo-01.png" className="h-40px" style={{width: 'auto'}} alt="CD Hydro" /></span>
            <span className="fs-40 fw-600 mx-3">Deep Decarbonization</span>
            <span className="fs-40 fw-600 mx-3"><img src="/assets/images/background/CD Hydro Power logo-01.png" className="h-40px" style={{width: 'auto'}} alt="CD Hydro" /></span>
            <span className="fs-40 fw-600 mx-3">Renewable Energy</span>
            <span className="fs-40 fw-600 mx-3"><img src="/assets/images/background/CD Hydro Power logo-01.png" className="h-40px" style={{width: 'auto'}} alt="CD Hydro" /></span>
          </div>
        </div>
      </section>


      <section className="bg-light">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="subtitle wow fadeInUp mb-3">Hydroelectric Energy Services</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Reliable, Renewable, and <span className="op-3">Climate-Resilient Energy</span></h2>
              <p className="lead mb-0 wow fadeInUp">Hydropower delivers round-the-clock clean energy with grid stability, green hydrogen support, and zero emissions.</p>
              <div className="spacer-single"></div>
              <div className="spacer-half"></div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/1.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="position-absolute top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>Hydroelectric Power Plants</h4>
                    <p className="mb-0">Large-scale clean energy generation with long operational lifespans.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/2.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="position-absolute top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>Green Hydrogen Production</h4>
                    <p className="mb-0">Direct support for India's hydrogen economy and net-zero goals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/services" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/services/3.webp" className="w-100 hover-scale-1-2" alt="" />
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-4 mt-min-100">
                    <div className="position-absolute top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                      <Link to="/project-single">
                        <img src="/assets/images/misc/up-right-arrow.webp" className="w-60px p-20" alt="" />
                      </Link>
                    </div>
                    <h4>Grid Stability Solutions</h4>
                    <p className="mb-0">Ensuring reliable power supply for renewables-heavy grids.</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="text-center">
              <Link className="btn-main fx-slide" to="/services"><span>View All Services</span></Link>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="subtitle wow fadeInUp mb-3">Our Solar Projects</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Powering a Brighter Future <span className="op-3">with Clean Energy</span></h2>
              <p className="lead mb-0 wow fadeInUp">Explore our latest solar installations—from residential rooftops to commercial systems—each designed for maximum efficiency and sustainability.</p>
              <div className="spacer-single"></div>
              <div className="spacer-half"></div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-12 wow fadeInUp">
              <div className="overflow-hidden rounded-1">
                <div className="position-relative wow fadeIn">
                  <div className="owl-custom-nav menu-float" data-target="#project-single-carousel">
                    <a className="btn-next"></a>
                    <a className="btn-prev"></a>

                    <div id="project-single-carousel" className="owl-3-cols owl-carousel owl-theme">
                      <div className="item">
                        <Link to="/project-single">
                          <div className="hover rounded-1 position-relative overflow-hidden text-light">
                            <div className="position-absolute p-40 top-0 z-3">
                              <img src="/assets/images/misc/up-right-arrow-white.webp" className="w-10 mb-3 wow scaleIn" alt="" />
                            </div>
                            <div className="position-absolute p-40 bottom-0 z-3">
                              <h3>BrightHome Energy</h3>
                              <p className="mb-0 hover-mh-60">Home Installation</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/projects/1.webp" className="w-100 hover-scale-1-2" alt="" />
                            <div className="gradient-edge-bottom h-50"></div>
                          </div>
                        </Link>
                      </div>

                      <div className="item">
                        <Link to="/project-single">
                          <div className="hover rounded-1 position-relative overflow-hidden text-light">
                            <div className="position-absolute p-40 top-0 z-3">
                              <img src="/assets/images/misc/up-right-arrow-white.webp" className="w-10 mb-3 wow scaleIn" alt="" />
                            </div>
                            <div className="position-absolute p-40 bottom-0 z-3">
                              <h3>GreenMart Supermarket</h3>
                              <p className="mb-0 hover-mh-60">Solar Panel Upgrades</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/projects/2.webp" className="w-100 hover-scale-1-2" alt="" />
                            <div className="gradient-edge-bottom h-50"></div>
                          </div>
                        </Link>
                      </div>

                      <div className="item">
                        <Link to="/project-single">
                          <div className="hover rounded-1 position-relative overflow-hidden text-light">
                            <div className="position-absolute p-40 top-0 z-3">
                              <img src="/assets/images/misc/up-right-arrow-white.webp" className="w-10 mb-3 wow scaleIn" alt="" />
                            </div>
                            <div className="position-absolute p-40 bottom-0 z-3">
                              <h3>EcoSchool Initiative</h3>
                              <p className="mb-0 hover-mh-60">Custom System Design</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/projects/3.webp" className="w-100 hover-scale-1-2" alt="" />
                            <div className="gradient-edge-bottom h-50"></div>
                          </div>
                        </Link>
                      </div>

                      <div className="item">
                        <Link to="/project-single">
                          <div className="hover rounded-1 position-relative overflow-hidden text-light">
                            <div className="position-absolute p-40 top-0 z-3">
                              <img src="/assets/images/misc/up-right-arrow-white.webp" className="w-10 mb-3 wow scaleIn" alt="" />
                            </div>
                            <div className="position-absolute p-40 bottom-0 z-3">
                              <h3>UrbanSolar 360</h3>
                              <p className="mb-0 hover-mh-60">System Monitoring & Reporting</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/projects/4.webp" className="w-100 hover-scale-1-2" alt="" />
                            <div className="gradient-edge-bottom h-50"></div>
                          </div>
                        </Link>
                      </div>

                      <div className="item">
                        <Link to="/project-single">
                          <div className="hover rounded-1 position-relative overflow-hidden text-light">
                            <div className="position-absolute p-40 top-0 z-3">
                              <img src="/assets/images/misc/up-right-arrow-white.webp" className="w-10 mb-3 wow scaleIn" alt="" />
                            </div>
                            <div className="position-absolute p-40 bottom-0 z-3">
                              <h3>CD HYDRO Cares</h3>
                              <p className="mb-0 hover-mh-60">Community Project</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/projects/5.webp" className="w-100 hover-scale-1-2" alt="" />
                            <div className="gradient-edge-bottom h-50"></div>
                          </div>
                        </Link>
                      </div>

                      <div className="item">
                        <Link to="/project-single">
                          <div className="hover rounded-1 position-relative overflow-hidden text-light">
                            <div className="position-absolute p-40 top-0 z-3">
                              <img src="/assets/images/misc/up-right-arrow-white.webp" className="w-10 mb-3 wow scaleIn" alt="" />
                            </div>
                            <div className="position-absolute p-40 bottom-0 z-3">
                              <h3>SunSmart Office</h3>
                              <p className="mb-0 hover-mh-60">Solar Battery Storage</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/projects/6.webp" className="w-100 hover-scale-1-2" alt="" />
                            <div className="gradient-edge-bottom h-50"></div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>
            </div>

            <div className="col-lg-7">
              <div className="accordion s2 wow fadeInUp">
                <div className="accordion-section">
                  <div className="accordion-section-title" data-tab="#accordion-a1">
                    How does solar energy work?
                  </div>
                  <div className="accordion-section-content" id="accordion-a1">
                    Solar panels absorb sunlight using photovoltaic (PV) cells, which convert it into direct current (DC) electricity. An inverter then transforms that into alternating current (AC), which powers your home or business.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a2">
                    Will solar panels reduce my energy bills?
                  </div>
                  <div className="accordion-section-content" id="accordion-a2">
                    Yes. By generating your own electricity, you can significantly reduce or even eliminate your monthly utility bills, depending on your system size and energy usage.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a3">
                    Is my home suitable for solar panels?
                  </div>
                  <div className="accordion-section-content" id="accordion-a3">
                    Most homes are. Ideally, you'll need a roof with good sun exposure (minimal shade), enough space for the panels, and a structure in good condition. We provide a free assessment to confirm suitability.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a4">
                    What's the lifespan of a solar system?
                  </div>
                  <div className="accordion-section-content" id="accordion-a4">
                    Solar panels typically last 25–30 years or more. Inverters and batteries may need replacement sooner, but most systems continue to function well with minimal maintenance.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a5">
                    Do solar panels work on cloudy days?
                  </div>
                  <div className="accordion-section-content" id="accordion-a5">
                    Yes, solar panels still generate electricity in cloudy conditions—just at a lower output. Efficiency may drop by 10–25%, but you'll still be producing power.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section" className="p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <a className="d-block hover popup-youtube" href="https://www.youtube.com/watch?v=C6rf51uHWJg">
                <div className="position-relative overflow-hidden">
                  <div className="position-absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
                    <div className="player circle wow scaleIn"><span></span></div>
                  </div>
                  <div className="position-absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
                  <img src="/assets/images/background/w1.webp" className="w-100 hover-scale-1-1" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Index;
