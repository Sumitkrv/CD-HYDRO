import { Link } from 'react-router-dom';

function HowItWorks() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/w4.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">How It Works</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">How It Works</li>
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
              <div className="subtitle wow fadeInUp mb-3">Simple Process</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">From Consultation to Activation</h2>
              <p className="lead wow fadeInUp" data-wow-delay=".3s">Going solar is easier than you think. Our streamlined process ensures a smooth transition to clean energy.</p>
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft">
              <img src="/assets/images/misc/4.webp" className="img-fluid rounded" alt="" />
            </div>

            <div className="col-lg-6 wow fadeInRight">
              <div className="d-flex mb-4">
                <div className="de-number me-4">
                  <span className="fs-48 fw-bold id-color-2">01</span>
                </div>
                <div>
                  <h4>Site Evaluation</h4>
                  <p>Our experts visit your property to assess roof condition, sun exposure, and energy needs. We'll determine the optimal system size and provide a detailed proposal with estimated savings.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 wow fadeInRight">
              <img src="/assets/images/misc/5.webp" className="img-fluid rounded" alt="" />
            </div>

            <div className="col-lg-6 order-lg-1 wow fadeInLeft">
              <div className="d-flex mb-4">
                <div className="de-number me-4">
                  <span className="fs-48 fw-bold id-color-2">02</span>
                </div>
                <div>
                  <h4>Design & Permitting</h4>
                  <p>Once you approve the proposal, we design your custom solar system and handle all permits and paperwork. Our team manages utility applications and approvals so you don't have to.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 wow fadeInLeft">
              <img src="/assets/images/misc/6.webp" className="img-fluid rounded" alt="" />
            </div>

            <div className="col-lg-6 wow fadeInRight">
              <div className="d-flex mb-4">
                <div className="de-number me-4">
                  <span className="fs-48 fw-bold id-color-2">03</span>
                </div>
                <div>
                  <h4>Professional Installation</h4>
                  <p>Our certified technicians install your solar panels with precision and care. Most residential installations are completed in 1-3 days. We ensure minimal disruption to your daily routine.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 wow fadeInRight">
              <img src="/assets/images/misc/7.webp" className="img-fluid rounded" alt="" />
            </div>

            <div className="col-lg-6 order-lg-1 wow fadeInLeft">
              <div className="d-flex mb-4">
                <div className="de-number me-4">
                  <span className="fs-48 fw-bold id-color-2">04</span>
                </div>
                <div>
                  <h4>Activation & Monitoring</h4>
                  <p>After final inspection and approval, we activate your system. You'll receive access to our monitoring platform to track your energy production and savings in real-time from anywhere.</p>
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

export default HowItWorks;
