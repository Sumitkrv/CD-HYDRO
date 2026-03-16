import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="no-bottom no-top" id="content">

      <div id="top"></div>

      {/* ===== Hero / Subheader ===== */}
      <section id="subheader" className="bg-dark text-light position-relative jarallax">
        <img src="/assets/images/background/2.webp" className="jarallax-img" alt="" />
        <div className="container position-relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Insights &amp; Innovation in Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Blog &amp; News</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gradient-edge-bottom h-50"></div>
        <div className="sw-overlay"></div>
      </section>

      {/* ===== Featured / Latest Post ===== */}
      <section>
        <div className="container">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp">
              <div className="position-relative overflow-hidden rounded-1">
                <Link to="/blog-single">
                  <img src="/assets/images/background/1.webp" className="w-100 hover-scale-1-2" alt="Featured Post" style={{transition: '.5s'}} />
                </Link>
                <div className="position-absolute bottom-0 start-0 p-3 z-2">
                  <span className="badge bg-color text-white fw-600 px-3 py-2" style={{fontSize: '12px'}}>FEATURED</span>
                </div>
                <div className="gradient-edge-bottom h-50"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="subtitle id-color wow fadeInUp">Latest Insight</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                <Link to="/blog-single" className="text-dark" style={{textDecoration: 'none'}}>
                  How Hydropower is Driving India's Green Hydrogen Revolution
                </Link>
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".3s">Hydroelectric energy is emerging as the backbone of green hydrogen production in India. With round-the-clock generation capacity and zero emissions, hydro plants provide the stable, affordable electricity that electrolyzers need to split water into hydrogen at scale.</p>
              <div className="d-flex align-items-center mb-4 wow fadeInUp" data-wow-delay=".4s">
                <span className="me-3" style={{color: 'var(--primary-color)', fontWeight: '600'}}>
                  <i className="fa-solid fa-calendar-days me-1"></i> March 5, 2026
                </span>
                <span style={{color: '#888'}}>
                  <i className="fa-solid fa-clock me-1"></i> 6 min read
                </span>
              </div>
              <Link className="btn-main fx-slide wow fadeInUp" data-wow-delay=".5s" to="/blog-single"><span>Read Full Article</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Marquee Divider ===== */}
      <section className="section-dark p-0" aria-label="section">
        <div className="bg-color text-white d-flex py-4 lh-1">
          <div className="de-marquee-list-2">
            <span className="fs-40 fw-600 mx-3">Hydropower Insights</span>
            <span className="fs-40 fw-600 mx-3">•</span>
            <span className="fs-40 fw-600 mx-3">Green Hydrogen</span>
            <span className="fs-40 fw-600 mx-3">•</span>
            <span className="fs-40 fw-600 mx-3">Net Zero 2070</span>
            <span className="fs-40 fw-600 mx-3">•</span>
            <span className="fs-40 fw-600 mx-3">Clean Energy</span>
            <span className="fs-40 fw-600 mx-3">•</span>
            <span className="fs-40 fw-600 mx-3">Climate Resilience</span>
            <span className="fs-40 fw-600 mx-3">•</span>
            <span className="fs-40 fw-600 mx-3">Decarbonization</span>
            <span className="fs-40 fw-600 mx-3">•</span>
            <span className="fs-40 fw-600 mx-3">Hydropower Insights</span>
            <span className="fs-40 fw-600 mx-3">•</span>
            <span className="fs-40 fw-600 mx-3">Green Hydrogen</span>
            <span className="fs-40 fw-600 mx-3">•</span>
            <span className="fs-40 fw-600 mx-3">Net Zero 2070</span>
            <span className="fs-40 fw-600 mx-3">•</span>
          </div>
        </div>
      </section>

      {/* ===== Blog Grid ===== */}
      <section className="bg-light">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="subtitle wow fadeInUp mb-3">From Our Blog</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Stories, Research &amp; <span className="op-3">Industry Updates</span></h2>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/blog-single" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/background/2.webp" className="w-100 hover-scale-1-2" alt="" />
                      <div className="position-absolute top-0 start-0 p-3 z-2">
                        <span className="badge bg-dark text-white px-3 py-2" style={{fontSize: '11px'}}>HYDROPOWER</span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-3 mt-min-60">
                    <div className="d-flex align-items-center mb-3" style={{fontSize: '13px', color: '#888'}}>
                      <span className="me-3"><i className="fa-solid fa-calendar-days me-1"></i> Feb 18, 2026</span>
                      <span><i className="fa-solid fa-clock me-1"></i> 5 min</span>
                    </div>
                    <h4 style={{lineHeight: '1.4'}}>
                      <Link to="/blog-single" style={{textDecoration: 'none', color: 'inherit'}}>Small Hydro Projects: Unlocking Rural India's Energy Potential</Link>
                    </h4>
                    <p className="mb-0" style={{fontSize: '14px', color: '#666'}}>Small hydropower projects under 25 MW are transforming energy access in remote Himalayan communities while creating sustainable livelihoods.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/blog-single" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/background/3.webp" className="w-100 hover-scale-1-2" alt="" />
                      <div className="position-absolute top-0 start-0 p-3 z-2">
                        <span className="badge bg-dark text-white px-3 py-2" style={{fontSize: '11px'}}>GREEN HYDROGEN</span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-3 mt-min-60">
                    <div className="d-flex align-items-center mb-3" style={{fontSize: '13px', color: '#888'}}>
                      <span className="me-3"><i className="fa-solid fa-calendar-days me-1"></i> Feb 4, 2026</span>
                      <span><i className="fa-solid fa-clock me-1"></i> 7 min</span>
                    </div>
                    <h4 style={{lineHeight: '1.4'}}>
                      <Link to="/blog-single" style={{textDecoration: 'none', color: 'inherit'}}>Green Hydrogen: Why Hydro-Powered Electrolysis is the Future</Link>
                    </h4>
                    <p className="mb-0" style={{fontSize: '14px', color: '#666'}}>Electrolyzers powered by hydroelectricity produce the cleanest hydrogen possible. Here's why India's National Hydrogen Mission depends on it.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/blog-single" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/background/4.webp" className="w-100 hover-scale-1-2" alt="" />
                      <div className="position-absolute top-0 start-0 p-3 z-2">
                        <span className="badge bg-dark text-white px-3 py-2" style={{fontSize: '11px'}}>POLICY</span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-3 mt-min-60">
                    <div className="d-flex align-items-center mb-3" style={{fontSize: '13px', color: '#888'}}>
                      <span className="me-3"><i className="fa-solid fa-calendar-days me-1"></i> Jan 20, 2026</span>
                      <span><i className="fa-solid fa-clock me-1"></i> 4 min</span>
                    </div>
                    <h4 style={{lineHeight: '1.4'}}>
                      <Link to="/blog-single" style={{textDecoration: 'none', color: 'inherit'}}>India's Net Zero 2070 Roadmap: Where Hydropower Fits In</Link>
                    </h4>
                    <p className="mb-0" style={{fontSize: '14px', color: '#666'}}>India has committed to net-zero emissions by 2070. Hydroelectric power plays a central role in the energy transition strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/blog-single" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/background/4.webp" className="w-100 hover-scale-1-2" alt="" />
                      <div className="position-absolute top-0 start-0 p-3 z-2">
                        <span className="badge bg-dark text-white px-3 py-2" style={{fontSize: '11px'}}>GRID STABILITY</span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-3 mt-min-60">
                    <div className="d-flex align-items-center mb-3" style={{fontSize: '13px', color: '#888'}}>
                      <span className="me-3"><i className="fa-solid fa-calendar-days me-1"></i> Jan 8, 2026</span>
                      <span><i className="fa-solid fa-clock me-1"></i> 5 min</span>
                    </div>
                    <h4 style={{lineHeight: '1.4'}}>
                      <Link to="/blog-single" style={{textDecoration: 'none', color: 'inherit'}}>How Pumped Storage Hydro Stabilizes India's Renewable Grid</Link>
                    </h4>
                    <p className="mb-0" style={{fontSize: '14px', color: '#666'}}>Pumped-storage hydropower acts as a giant battery for the grid, absorbing excess variable renewable energy and releasing it during peak demand.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/blog-single" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/background/5.webp" className="w-100 hover-scale-1-2" alt="" />
                      <div className="position-absolute top-0 start-0 p-3 z-2">
                        <span className="badge bg-dark text-white px-3 py-2" style={{fontSize: '11px'}}>SUSTAINABILITY</span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-3 mt-min-60">
                    <div className="d-flex align-items-center mb-3" style={{fontSize: '13px', color: '#888'}}>
                      <span className="me-3"><i className="fa-solid fa-calendar-days me-1"></i> Dec 22, 2025</span>
                      <span><i className="fa-solid fa-clock me-1"></i> 6 min</span>
                    </div>
                    <h4 style={{lineHeight: '1.4'}}>
                      <Link to="/blog-single" style={{textDecoration: 'none', color: 'inherit'}}>Climate Resilience Through Hydroelectric Infrastructure</Link>
                    </h4>
                    <p className="mb-0" style={{fontSize: '14px', color: '#666'}}>Well-designed hydropower infrastructure provides flood control, irrigation, and drought management alongside clean energy generation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="hover">
                <div className="position-relative overflow-hidden">
                  <Link to="/blog-single" className="d-block hover">
                    <div className="position-relative overflow-hidden rounded-1">
                      <img src="/assets/images/background/6.webp" className="w-100 hover-scale-1-2" alt="" />
                      <div className="position-absolute top-0 start-0 p-3 z-2">
                        <span className="badge bg-dark text-white px-3 py-2" style={{fontSize: '11px'}}>INNOVATION</span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-30 position-relative bg-white rounded-1 mx-3 mt-min-60">
                    <div className="d-flex align-items-center mb-3" style={{fontSize: '13px', color: '#888'}}>
                      <span className="me-3"><i className="fa-solid fa-calendar-days me-1"></i> Dec 10, 2025</span>
                      <span><i className="fa-solid fa-clock me-1"></i> 8 min</span>
                    </div>
                    <h4 style={{lineHeight: '1.4'}}>
                      <Link to="/blog-single" style={{textDecoration: 'none', color: 'inherit'}}>Deep Decarbonization: The Role of Run-of-River Hydro Projects</Link>
                    </h4>
                    <p className="mb-0" style={{fontSize: '14px', color: '#666'}}>Run-of-river projects minimize environmental disruption while delivering continuous clean energy—a key pillar of deep decarbonization strategies.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Newsletter / CTA Section ===== */}
      <section className="bg-dark text-light">
        <div className="container">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle id-color wow fadeInUp">Stay Informed</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Subscribe to Our <span className="text-white">Newsletter</span></h2>
              <p className="wow fadeInUp" data-wow-delay=".3s">Get the latest insights on hydropower innovation, green hydrogen developments, and India's clean energy journey delivered to your inbox.</p>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="d-flex flex-column flex-sm-row gap-3">
                <input
                  type="email"
                  className="form-control flex-grow-1"
                  placeholder="Enter your email address"
                  style={{
                    height: '52px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    padding: '0 20px',
                    minWidth: 0,
                  }}
                />
                <a
                  className="btn-main fx-slide"
                  href="#"
                  style={{
                    whiteSpace: 'nowrap',
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 28px',
                    flexShrink: 0,
                  }}
                ><span>Subscribe</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact Bar ===== */}
      <section className="bg-color py-5 pb-4 d-none d-lg-block">
        <div className="container position-relative z-1">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="position-relative">
                <div className="row g-4 grid-divider sm-hide">
                  <div className="col-lg-4 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                    <div className="d-flex justify-content-center">
                      <i className="fs-60 text-white fa-solid fa-phone"></i>
                      <div className="ms-3">
                        <h4 className="mb-0">Need Our Services?</h4>
                        <p className="text-white">Call: +91 98925 45039</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                    <div className="d-flex justify-content-center">
                      <i className="fs-60 text-white fa-solid fa-clock"></i>
                      <div className="ms-3">
                        <h4 className="mb-0">Work Hours</h4>
                        <p className="text-white">Mon to Sat 08:00 - 17:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                    <div className="d-flex justify-content-center">
                      <i className="fs-60 text-white fa-solid fa-envelope"></i>
                      <div className="ms-3">
                        <h4 className="mb-0">Email Us</h4>
                        <p className="text-white">info@cdhydro.in</p>
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

export default Blog;
