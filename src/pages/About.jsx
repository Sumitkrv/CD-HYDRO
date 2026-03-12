import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/1.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">About Us</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gradient-edge-bottom h-50"></div>
        <div className="sw-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h5 className="wow fadeInRight">About Us</h5>
            </div>
            <div className="col-lg-9">
              <h3 className="wow fadeInRight" data-wow-delay=".2s">Switch to solar and save money while saving the planet. Our expert team provides clean, reliable energy solutions for homes and businesses. <span className="op-3">Go green, reduce your bills, and enjoy energy independence today!</span></h3>

              <div className="spacer-single"></div>

              <div className="row g-4 gx-5">
                <div className="col-md-3 col-sm-6">
                  <div className="de_count lh-1-6 wow fadeInRight" data-wow-delay=".2s">
                    <h3 className="fs-40 mb-0"><span className="timer" data-to="100" data-speed="3000">0</span>K+</h3>
                    Solar Panels Installed
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="de_count lh-1-6 wow fadeInRight" data-wow-delay=".4s">
                    <h3 className="fs-40 mb-0"><span className="timer" data-to="25" data-speed="3000">0</span>K+</h3>
                    Homes Powered
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="de_count lh-1-6 wow fadeInRight" data-wow-delay=".6s">
                    <h3 className="fs-40 mb-0"><span className="timer" data-to="16" data-speed="3000">0</span>+</h3>
                    Years of Solar Expertise
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
              <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Solar Power for Smarter Future</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Clean, Reliable Energy Made <span className="op-3">Simple and Affordable</span></h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">Discover the power of the sun with our end-to-end solar energy solutions. Whether you're looking to reduce your electricity bills, increase property value, or lower your carbon footprint, we make it easy to go solar.</p>

              <div className="border-bottom mb-4"></div>

              <ul className="ul-check fw-600 mb-4 wow fadeInUp" data-wow-delay=".6s">
                <li>Save money by generating your own power.</li>
                <li>Reduce your carbon footprint and protect the planet.</li>
                <li>Solar homes often see a higher resale value.</li>
                <li>Reduce reliance on the grid and rising utility costs.</li>
              </ul>

              <Link className="btn-main fx-slide wow fadeInUp" data-wow-delay=".9s" to="/get-a-quote"><span>Get a Quote</span></Link>

            </div>
            
          </div>

        </div>
      </section>

      <section className="bg-dark text-light">
        <div className="container position-relative z-1">
          <div className="row g-4 gx-5 align-items-center">

            <div className="col-lg-6">
              <div className="position-relative">
                <div className="bg-blur text-light text-center rounded-1 position-absolute w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn">
                  <h2 className="mb-0">325%</h2>
                  <p className="lh-1-5">Average increase in solar panel</p>
                </div>
                <div className="rounded-1 w-90 overflow-hidden wow zoomIn">
                  <img src="/assets/images/misc/s4.webp" className="w-100 wow scaleIn" alt="" />
                </div>
                <div className="rounded-1 w-50 position-absolute mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn" data-wow-delay=".2s">
                  <img src="/assets/images/misc/s1.webp" className="w-100 wow scaleIn" data-wow-delay=".2s" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="subtitle id-color wow fadeInUp">Trusted &amp; Affordable</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Why Choose Us?</h2>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="h-100 rounded-1">
                    <div className="position-relative wow fadeInUp" data-wow-delay=".0s">
                      <h4>Professional Team</h4>
                      <p className="mb-0">Certified professionals with years of solar installation experience.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="h-100 rounded-1">
                    <div className="position-relative wow fadeInUp" data-wow-delay=".2s">
                      <h4>Customized Solutions</h4>
                      <p className="mb-0">Systems tailored to your energy needs and property layout.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="h-100 rounded-1">
                    <div className="position-relative wow fadeInUp" data-wow-delay=".4s">
                      <h4>Affordable Plans</h4>
                      <p className="mb-0">Flexible financing and guidance on maximizing incentives.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="h-100 rounded-1">
                    <div className="position-relative wow fadeInUp" data-wow-delay=".6s">
                      <h4>Ongoing Support</h4>
                      <p className="mb-0">Full-service maintenance and system monitoring after installation.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="h-100 rounded-1">
                    <div className="position-relative wow fadeInUp" data-wow-delay=".8s">
                      <h4>Top-Tier Equipment</h4>
                      <p className="mb-0">We use premium solar panels and inverters for maximum efficiency.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="h-100 rounded-1">
                    <div className="position-relative wow fadeInUp" data-wow-delay="1s">
                      <h4>Fast Installation</h4>
                      <p className="mb-0">Efficient project turnaround without compromising on safety or quality.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="spacer-double"></div>

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

export default About;
