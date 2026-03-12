import { Link } from 'react-router-dom';

function Industries() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/2.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Industries We Serve</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Industries</li>
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
              <div className="subtitle wow fadeInUp mb-3">Who We Work With</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Comprehensive Solar Solutions</h2>
              <p className="lead wow fadeInUp" data-wow-delay=".3s">From residential to industrial, we provide tailored solar solutions for every sector.</p>
            </div>
          </div>

          <div className="spacer-20"></div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="relative hover text-light">
                <Link className="d-block relative overflow-hidden text-light" to="/services">
                  <div className="absolute start-0 w-100 abs-centered text-center">
                    <div className="relative z-2">
                      <i className="d-block fa-solid fa-house mb-3 id-color-2 fs-60 wow zoomIn"></i>
                      <h4 className="wow fadeIn" data-wow-delay=".25s">Residential</h4>
                      <p className="wow fadeIn" data-wow-delay=".3s">Custom solar systems for homes</p>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/industries/1.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="relative hover text-light">
                <Link className="d-block relative overflow-hidden text-light" to="/services">
                  <div className="absolute start-0 w-100 abs-centered text-center">
                    <div className="relative z-2">
                      <i className="d-block fa-solid fa-building mb-3 id-color-2 fs-60 wow zoomIn"></i>
                      <h4 className="wow fadeIn" data-wow-delay=".25s">Commercial</h4>
                      <p className="wow fadeIn" data-wow-delay=".3s">Reduce operating costs for businesses</p>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/industries/2.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="relative hover text-light">
                <Link className="d-block relative overflow-hidden text-light" to="/services">
                  <div className="absolute start-0 w-100 abs-centered text-center">
                    <div className="relative z-2">
                      <i className="d-block fa-solid fa-industry mb-3 id-color-2 fs-60 wow zoomIn"></i>
                      <h4 className="wow fadeIn" data-wow-delay=".25s">Industrial</h4>
                      <p className="wow fadeIn" data-wow-delay=".3s">Large-scale power for factories</p>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/industries/3.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="relative hover text-light">
                <Link className="d-block relative overflow-hidden text-light" to="/services">
                  <div className="absolute start-0 w-100 abs-centered text-center">
                    <div className="relative z-2">
                      <i className="d-block fa-solid fa-graduation-cap mb-3 id-color-2 fs-60 wow zoomIn"></i>
                      <h4 className="wow fadeIn" data-wow-delay=".25s">Education</h4>
                      <p className="wow fadeIn" data-wow-delay=".3s">Sustainable energy for schools</p>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/industries/4.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="relative hover text-light">
                <Link className="d-block relative overflow-hidden text-light" to="/services">
                  <div className="absolute start-0 w-100 abs-centered text-center">
                    <div className="relative z-2">
                      <i className="d-block fa-solid fa-stethoscope mb-3 id-color-2 fs-60 wow zoomIn"></i>
                      <h4 className="wow fadeIn" data-wow-delay=".25s">Healthcare</h4>
                      <p className="wow fadeIn" data-wow-delay=".3s">Reliable power for medical facilities</p>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/industries/5.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="relative hover text-light">
                <Link className="d-block relative overflow-hidden text-light" to="/services">
                  <div className="absolute start-0 w-100 abs-centered text-center">
                    <div className="relative z-2">
                      <i className="d-block fa-solid fa-tractor mb-3 id-color-2 fs-60 wow zoomIn"></i>
                      <h4 className="wow fadeIn" data-wow-delay=".25s">Agriculture</h4>
                      <p className="wow fadeIn" data-wow-delay=".3s">Power for farms and irrigation</p>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/industries/6.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="relative hover text-light">
                <Link className="d-block relative overflow-hidden text-light" to="/services">
                  <div className="absolute start-0 w-100 abs-centered text-center">
                    <div className="relative z-2">
                      <i className="d-block fa-solid fa-landmark mb-3 id-color-2 fs-60 wow zoomIn"></i>
                      <h4 className="wow fadeIn" data-wow-delay=".25s">Government</h4>
                      <p className="wow fadeIn" data-wow-delay=".3s">Public sector solar solutions</p>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/industries/7.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="relative hover text-light">
                <Link className="d-block relative overflow-hidden text-light" to="/services">
                  <div className="absolute start-0 w-100 abs-centered text-center">
                    <div className="relative z-2">
                      <i className="d-block fa-solid fa-hotel mb-3 id-color-2 fs-60 wow zoomIn"></i>
                      <h4 className="wow fadeIn" data-wow-delay=".25s">Hospitality</h4>
                      <p className="wow fadeIn" data-wow-delay=".3s">Energy solutions for hotels & resorts</p>
                    </div>
                    <div className="bg-gradient-trans-bottom-dark"></div>
                  </div>
                  <img src="/assets/images/industries/8.webp" className="w-100 hover-scale-1-1" alt="" />
                </Link>
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

export default Industries;
