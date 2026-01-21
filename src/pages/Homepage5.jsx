function Homepage5() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="section-hero" className="v-center no-top no-bottom position-relative jarallax">
        <img src="/assets/images/background/1.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="spacer-double sm-hide"></div>
              <h5 className="text-white wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="text-white mb-3 fs-100 wow fadeInUp" data-wow-delay=".2s">Solar <span className="id-color-2">Smart</span></h1>
              <p className="text-white lead wow fadeInUp fs-28" data-wow-delay=".3s">Transform your property with advanced solar technology.<br/>Save money, increase value, protect the planet.</p>
              <a className="btn-main wow fadeInUp mb-2" data-wow-delay=".4s" href="get-a-quote.html">Get A Quote</a>
              <a className="btn-line white wow fadeInUp mb-2 ms-2" data-wow-delay=".6s" href="how-it-works.html">How It Works</a>
              <div className="spacer-double"></div>
            </div>
          </div>
        </div>
        <div className="sw-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12 text-center">
              <div className="subtitle wow fadeInUp mb-3">What Makes Us Different</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">The CD HYDRO Advantage</h2>
            </div>
          </div>
          <div className="spacer-20"></div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="de-box-a text-center">
                <div className="d-icon-2 mb-3">
                  <i className="icofont-sun id-color-2"></i>
                </div>
                <h4>Premium Panels</h4>
                <p>We exclusively use top-tier solar panels from industry-leading manufacturers, ensuring maximum efficiency and longevity for your investment.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="de-box-a text-center">
                <div className="d-icon-2 mb-3">
                  <i className="icofont-wrench id-color-2"></i>
                </div>
                <h4>Expert Installation</h4>
                <p>Our certified technicians bring years of experience to every project, guaranteeing professional installation that meets all safety and quality standards.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="de-box-a text-center">
                <div className="d-icon-2 mb-3">
                  <i className="icofont-dollar id-color-2"></i>
                </div>
                <h4>Flexible Financing</h4>
                <p>Multiple payment options including cash, loans, and leasing programs make solar accessible to every budget and financial situation.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="de-box-a text-center">
                <div className="d-icon-2 mb-3">
                  <i className="icofont-badge id-color-2"></i>
                </div>
                <h4>25-Year Warranty</h4>
                <p>Industry-leading warranty coverage protects your investment with comprehensive guarantees on both equipment and workmanship.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="de-box-a text-center">
                <div className="d-icon-2 mb-3">
                  <i className="icofont-dashboard id-color-2"></i>
                </div>
                <h4>Real-Time Monitoring</h4>
                <p>Advanced monitoring systems allow you to track your energy production and savings in real-time from any device, anywhere.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="de-box-a text-center">
                <div className="d-icon-2 mb-3">
                  <i className="icofont-headphone-alt-3 id-color-2"></i>
                </div>
                <h4>24/7 Support</h4>
                <p>Our dedicated customer support team is available around the clock to address any questions or concerns about your solar system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle wow fadeInUp mb-3">Our Impact</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Making a Difference Together</h2>
              <p className="lead wow fadeInUp" data-wow-delay=".3s">Every solar installation contributes to a cleaner, more sustainable future. Join thousands of satisfied customers who are making a positive environmental impact.</p>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <div className="de-box text-center">
                    <h2 className="id-color-2 mb-0 wow flipInX"><span className="timer" data-to="100000" data-speed="3000">0</span>+</h2>
                    <span className="d-block">Panels Installed</span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="de-box text-center">
                    <h2 className="id-color-2 mb-0 wow flipInX" data-wow-delay=".2s"><span className="timer" data-to="25000" data-speed="3000">0</span>+</h2>
                    <span className="d-block">Homes Powered</span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="de-box text-center">
                    <h2 className="id-color-2 mb-0 wow flipInX" data-wow-delay=".4s"><span className="timer" data-to="16" data-speed="3000">0</span>+</h2>
                    <span className="d-block">Years Experience</span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="de-box text-center">
                    <h2 className="id-color-2 mb-0 wow flipInX" data-wow-delay=".6s"><span className="timer" data-to="98" data-speed="3000">0</span>%</h2>
                    <span className="d-block">Satisfaction Rate</span>
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

export default Homepage5;
