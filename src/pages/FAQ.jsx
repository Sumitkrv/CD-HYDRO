import { Link } from 'react-router-dom';

function FAQ() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/w2.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">FAQ</li>
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
            <div className="col-lg-6">
              <div className="accordion s2 wow fadeInUp">
                <div className="accordion-section">
                  <div className="accordion-section-title" data-tab="#accordion-1">
                    How does hydroelectric energy work?
                  </div>
                  <div className="accordion-section-content" id="accordion-1">
                    Hydropower uses flowing or falling water to spin turbines connected to generators. This converts hydraulic energy into reliable grid-quality electricity.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-2">
                    Can hydropower lower long-term energy costs?
                  </div>
                  <div className="accordion-section-content" id="accordion-2">
                    Yes. Hydro projects deliver stable renewable output over long lifecycles, helping reduce dependency on high-cost fossil generation and improving cost predictability.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-3">
                    What makes a site suitable for hydro?
                  </div>
                  <div className="accordion-section-content" id="accordion-3">
                    Suitable sites typically have dependable flow, viable head, geotechnical stability, and practical grid access. Feasibility studies confirm technical and environmental viability.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-4">
                    What is the lifespan of hydro infrastructure?
                  </div>
                  <div className="accordion-section-content" id="accordion-4">
                    Hydropower assets can operate for several decades with planned maintenance and periodic refurbishment, making them one of the longest-life renewable technologies.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-5">
                    Is hydropower reliable year-round?
                  </div>
                  <div className="accordion-section-content" id="accordion-5">
                    In well-designed projects, yes. Seasonal variations are handled through reservoir strategy, flow management, and operational planning to maintain dependable output.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-6">
                    How are hydro project costs estimated?
                  </div>
                  <div className="accordion-section-content" id="accordion-6">
                    Costs depend on civil scope, electro-mechanical equipment, site terrain, and transmission connectivity. We provide stage-wise estimates after feasibility assessment.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="accordion s2 wow fadeInUp">
                <div className="accordion-section">
                  <div className="accordion-section-title" data-tab="#accordion-7">
                    Are there incentives for hydro projects?
                  </div>
                  <div className="accordion-section-content" id="accordion-7">
                    Incentives and policy support vary by region and project category. Our team aligns project structuring with available renewable and infrastructure programs.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-8">
                    How long does hydro project execution take?
                  </div>
                  <div className="accordion-section-content" id="accordion-8">
                    Timelines vary by project scale and approvals. Typical delivery includes feasibility, permitting, civil works, equipment installation, and commissioning phases.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-9">
                    Is storage required with hydropower?
                  </div>
                  <div className="accordion-section-content" id="accordion-9">
                    Not always. Many hydro systems provide dispatchable output directly. For additional flexibility, pumped storage can be integrated for peak balancing and reserve support.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-10">
                    Is hydropower environmentally manageable?
                  </div>
                  <div className="accordion-section-content" id="accordion-10">
                    Yes, with proper planning. We apply environmental impact assessments, flow management, and mitigation strategies to ensure responsible project development.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-11">
                    Can hydro support remote or off-grid locations?
                  </div>
                  <div className="accordion-section-content" id="accordion-11">
                    Yes. Mini and micro hydro systems can support remote communities, while larger projects can connect to regional grids for broad energy access.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-12">
                    What maintenance does hydro equipment need?
                  </div>
                  <div className="accordion-section-content" id="accordion-12">
                    Hydro systems require scheduled turbine, generator, and civil inspections, along with condition monitoring. Preventive maintenance ensures high availability and long service life.
                  </div>
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

export default FAQ;
