import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/4.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Contact Us</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Contact</li>
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
              <h3>Send Us a Message</h3>
              <form name="contactForm" id='contact_form' method="post" action='#'>

                <div className="row g-4">

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Name:</label>
                      <input type='text' name='name' id='name' className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Email:</label>
                      <input type='text' name='email' id='email' className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="field-set">
                      <label>Phone:</label>
                      <input type='text' name='phone' id='phone' className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="field-set">
                      <label>Message:</label>
                      <textarea name='message' id='message' className="form-control"></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div id='submit'>
                      <input type='submit' id='send_message' value='Submit Form' className="btn-main" />
                    </div>
                  </div>

                </div>
              </form>

              <div id="success_message" className='success'>
                Your message has been sent successfully. Refresh this page if you want to send more messages.
              </div>
              <div id="error_message" className='error'>
                Sorry there was an error sending your form.
              </div>

            </div>

            <div className="col-lg-4">
              <div className="de-box mb-3">
                <h4>US Office</h4>
                <address className="s1">
                  <span><i className="fa-solid fa-location-dot me-2 id-color"></i>100 Solar Ave, San Diego, CA</span>
                  <span><i className="fa-solid fa-phone me-2 id-color"></i>+1 800 987 654</span>
                  <span><i className="fa-solid fa-envelope me-2 id-color"></i><a href="mailto:info@cdhydro.in">info@cdhydro.in</a></span>
                  <span><i className="fa-solid fa-clock me-2 id-color"></i>Mon - Sat 08:00 - 17:00</span>
                </address>
              </div>

              <div className="de-box mb-3">
                <h4>UK Office</h4>
                <address className="s1">
                  <span><i className="fa-solid fa-location-dot me-2 id-color"></i>45 Solar Street, London, UK</span>
                  <span><i className="fa-solid fa-phone me-2 id-color"></i>+44 20 7946 0958</span>
                  <span><i className="fa-solid fa-envelope me-2 id-color"></i><a href="mailto:info@cdhydro.in">info@cdhydro.in</a></span>
                  <span><i className="fa-solid fa-clock me-2 id-color"></i>Mon - Fri 09:00 - 18:00</span>
                </address>
              </div>

              <div className="de-box">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
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

export default Contact;
