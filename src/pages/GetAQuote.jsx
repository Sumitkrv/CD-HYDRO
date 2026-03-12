import { Link } from 'react-router-dom';

function GetAQuote() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/w3.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Get A Quote</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Get A Quote</li>
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
            
            <div className="col-lg-8 offset-lg-2">
              
              <form name="bookingForm" id='booking_form' method="post" action='booking.php'>
                <div className="de-form-group mb-3 text-center">
                  <h3>Request a Solar Consultation</h3>
                  <p>Fill out the form below and our team will contact you shortly to discuss your solar energy needs.</p>
                </div>

                <div className="spacer-30"></div>

                <div className="row g-4">

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Full Name</label>
                      <input type='text' name='name' id='name' className="form-control" required />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Email Address</label>
                      <input type='email' name='email' id='email' className="form-control" required />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Phone Number</label>
                      <input type='text' name='phone' id='phone' className="form-control" required />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Service</label>
                      <select name='service' id='service' className="form-control" required>
                        <option value="">Select Service</option>
                        <option value="residential">Residential Solar</option>
                        <option value="commercial">Commercial Solar</option>
                        <option value="industrial">Industrial Solar</option>
                        <option value="battery">Battery Storage</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="consultation">Consultation Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Property Type</label>
                      <select name='property_type' id='property_type' className="form-control" required>
                        <option value="">Select Property Type</option>
                        <option value="single-family">Single Family Home</option>
                        <option value="multi-family">Multi-Family Home</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="industrial">Industrial Facility</option>
                        <option value="agricultural">Agricultural Property</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Estimated Monthly Electric Bill</label>
                      <select name='monthly_bill' id='monthly_bill' className="form-control" required>
                        <option value="">Select Range</option>
                        <option value="under-100">Under $100</option>
                        <option value="100-200">$100 - $200</option>
                        <option value="200-300">$200 - $300</option>
                        <option value="300-500">$300 - $500</option>
                        <option value="over-500">Over $500</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Preferred Date</label>
                      <input type="text" name='date' id='date_picker' className="form-control" placeholder="Select Date" required />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>Preferred Time</label>
                      <select name='time' id='time' className="form-control" required>
                        <option value="">Select Time</option>
                        <option value="08:00">08:00 AM</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="field-set">
                      <label>Street Address</label>
                      <input type='text' name='address' id='address' className="form-control" required />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="field-set">
                      <label>City</label>
                      <input type='text' name='city' id='city' className="form-control" required />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="field-set">
                      <label>State</label>
                      <input type='text' name='state' id='state' className="form-control" required />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="field-set">
                      <label>ZIP Code</label>
                      <input type='text' name='zip' id='zip' className="form-control" required />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="field-set">
                      <label>Additional Information (Optional)</label>
                      <textarea name='message' id='message' className="form-control" rows="4" placeholder="Tell us more about your project, roof condition, energy goals, etc."></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div id='submit'>
                      <input type='submit' id='send_message' value='Submit Request' className="btn-main w-100" />
                    </div>
                  </div>

                </div>
              </form>

              <div id="success_message" className='success mt-3'>
                Your request has been sent successfully. Our team will contact you shortly to confirm your consultation appointment.
              </div>
              <div id="error_message" className='error mt-3'>
                Sorry, there was an error sending your request. Please try again or contact us directly.
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

export default GetAQuote;
