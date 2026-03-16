import { Link } from 'react-router-dom';

function Index() {
  const homeServices = [
    {
      title: 'Hydroelectric Power Plants',
      desc: 'Long-life hydropower assets delivering dependable, low-carbon electricity for decades.',
      img: '/assets/images/background/1.webp',
      tag: 'Clean Baseload'
    },
    {
      title: 'Green Hydrogen Production',
      desc: "Hydro-powered electrolysis supporting India's hydrogen transition and net-zero pathway.",
      img: '/assets/images/background/2.webp',
      tag: 'Future Fuel'
    },
    {
      title: 'Grid Stability Solutions',
      desc: 'Flexible generation that stabilizes renewable-heavy grids and improves reliability.',
      img: '/assets/images/background/3.webp',
      tag: 'Smart Grid'
    },
  ];

  const groupWebsites = [
    { name: 'CD Hydro Energy', logo: '/assets/images/background/1.webp', href: '#' },
    { name: 'CD Hydro Infra', logo: '/assets/images/background/2.webp', href: '#' },
    { name: 'CD Renewables', logo: '/assets/images/background/3.webp', href: '#' },
    { name: 'CD Grid Tech', logo: '/assets/images/background/4.webp', href: '#' },
    { name: 'CD Green Fuels', logo: '/assets/images/background/4.webp', href: '#' },
    { name: 'CD Utilities', logo: '/assets/images/background/5.webp', href: '#' },
    { name: 'CD Transmission', logo: '/assets/images/background/6.webp', href: '#' },
  ];

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
                <div className="position-relative overflow-hidden z-2 mb-5 rounded-1 mb-4 w-60 soft-shadow wow zoomIn"><img src="/assets/images/background/1.webp" className="w-100 wow scaleIn" data-wow-duration="1s" alt="" /></div>
                         
                <div className="position-absolute overflow-hidden top-0 end-0 mt-5 rounded-1 mb-4 w-60 wow zoomIn" data-wow-delay=".2s"><img src="/assets/images/background/2.webp" className="w-100 wow scaleIn" data-wow-duration="1s" alt="" />
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


      <section style={{background: 'linear-gradient(180deg, #f7fbff 0%, #eef5fb 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: '-120px', right: '-90px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,170,255,0.20) 0%, rgba(0,170,255,0.03) 55%, rgba(0,170,255,0) 72%)'}}></div>
        <div style={{position: 'absolute', bottom: '-130px', left: '-100px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(12,77,125,0.14) 0%, rgba(12,77,125,0.03) 55%, rgba(12,77,125,0) 72%)'}}></div>

        <style>{`
          .home-services-row {
            transition: background-color .35s ease;
          }
          .home-services-row .hs-media {
            border-radius: 12px;
            overflow: hidden;
          }
          .home-services-row .hs-media img {
            transition: transform .7s cubic-bezier(.22,.61,.36,1);
          }
          .home-services-row .hs-content {
            transition: transform .35s ease;
          }
          .home-services-row .hs-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            color: var(--color-2, #00aaff);
            text-decoration: none;
          }
          .home-services-row .hs-link-icon {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            border: 1px solid rgba(0,170,255,.35);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            transition: all .25s ease;
          }
          .home-services-row:hover .hs-media img {
            transform: scale(1.07);
          }
          .home-services-row:hover .hs-content {
            transform: translateX(7px);
          }
          .home-services-row:hover .hs-link-icon {
            background: var(--color-2, #00aaff);
            color: #fff;
            border-color: transparent;
          }

          @media (max-width: 991px) {
            .home-services-row {
              padding: 16px 0 !important;
            }
            .home-services-row .hs-media {
              height: 190px !important;
            }
            .home-services-row .hs-content {
              padding-top: 4px;
            }
          }
        `}</style>

        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="subtitle wow fadeInUp mb-3">Hydroelectric Energy Services</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Reliable, Renewable, and <span className="op-3">Climate-Resilient Energy</span></h2>
              <p className="lead mb-0 wow fadeInUp">Hydropower delivers round-the-clock clean energy with grid stability, green hydrogen support, and zero emissions.</p>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {homeServices.map((service, index) => (
                <div
                  key={service.title}
                  className="home-services-row row align-items-center g-4 wow fadeInUp"
                  data-wow-delay={`.${index + 1}s`}
                  style={{
                    padding: '22px 0',
                    borderTop: index === 0 ? '1px solid rgba(15,45,80,0.15)' : '1px solid rgba(15,45,80,0.10)'
                  }}
                >
                  <div className={`col-lg-5 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                    <div className="hs-media" style={{height: '230px'}}>
                      <img src={service.img} alt={service.title} className="w-100 h-100" style={{objectFit: 'cover'}} />
                    </div>
                  </div>

                  <div className={`col-lg-7 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                    <div className="hs-content">
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                      <span style={{fontSize: '34px', fontWeight: 700, color: 'rgba(10,58,98,0.25)', lineHeight: 1}}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '12px',
                          fontWeight: 700,
                          letterSpacing: '.4px',
                          textTransform: 'uppercase',
                          color: '#0c4d7d',
                          background: 'rgba(18,129,208,0.12)',
                          borderRadius: '999px',
                          padding: '6px 12px'
                        }}
                      >
                        {service.tag}
                      </span>
                      </div>

                      <h3 style={{marginBottom: '10px'}}>{service.title}</h3>
                      <p style={{marginBottom: '14px', maxWidth: '620px'}}>{service.desc}</p>

                      <Link to="/services" className="hs-link">
                        <span>Learn more</span>
                        <span className="hs-link-icon"><i className="fa-solid fa-arrow-right"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{borderTop: '1px solid rgba(15,45,80,0.10)', marginTop: '4px', paddingTop: '28px'}} className="text-center">
                <Link className="btn-main fx-slide" to="/services"><span>View All Services</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="subtitle wow fadeInUp mb-3">Our Hydro Projects</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Powering a Brighter Future <span className="op-3">with Clean Energy</span></h2>
              <p className="lead mb-0 wow fadeInUp">Explore our latest hydroelectric developments—from run-of-river sites to grid support infrastructure—engineered for long-term reliability and clean growth.</p>
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
                            <img src="/assets/images/background/1.webp" className="w-100 hover-scale-1-2" alt="" />
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
                              <h3>RiverGate Hydro Station</h3>
                              <p className="mb-0 hover-mh-60">Turbine Modernization</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/background/2.webp" className="w-100 hover-scale-1-2" alt="" />
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
                            <img src="/assets/images/background/3.webp" className="w-100 hover-scale-1-2" alt="" />
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
                              <h3>Urban Hydro 360</h3>
                              <p className="mb-0 hover-mh-60">Digital Monitoring & Reporting</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/background/4.webp" className="w-100 hover-scale-1-2" alt="" />
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
                            <img src="/assets/images/background/6.webp" className="w-100 hover-scale-1-2" alt="" />
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
                              <h3>PeakFlow Storage Hub</h3>
                              <p className="mb-0 hover-mh-60">Pumped Storage Integration</p>
                            </div>
                            <div className="hover-op-05 bg-dark position-absolute w-100 h-100 top-0 start-0 z-2"></div>
                            <img src="/assets/images/background/7.webp" className="w-100 hover-scale-1-2" alt="" />
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
                    How does hydroelectric power work?
                  </div>
                  <div className="accordion-section-content" id="accordion-a1">
                    Hydropower converts the energy of moving water into electricity through turbines and generators. Water flow spins the turbine runner, and the connected generator produces grid-ready power.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a2">
                    Can hydropower help reduce power costs?
                  </div>
                  <div className="accordion-section-content" id="accordion-a2">
                    Yes. Efficient hydro assets deliver stable, long-term renewable electricity, helping reduce dependence on costly fossil-based generation and improving overall energy economics.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a3">
                    Where are hydro projects most suitable?
                  </div>
                  <div className="accordion-section-content" id="accordion-a3">
                    Hydro projects are best suited to locations with reliable water flow, viable elevation drop, and environmental feasibility. Site studies confirm technical and regulatory suitability before execution.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a4">
                    What is the lifespan of a hydro plant?
                  </div>
                  <div className="accordion-section-content" id="accordion-a4">
                    Hydroelectric plants are long-life assets and can operate for multiple decades with periodic refurbishment, making them one of the most durable renewable infrastructure investments.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a5">
                    Why is hydropower important for grid stability?
                  </div>
                  <div className="accordion-section-content" id="accordion-a5">
                    Hydropower can ramp quickly and provide dispatchable output, which helps balance intermittent renewables and maintain frequency and voltage stability across the grid.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{background: '#efefef', padding: '70px 0 55px'}}>
        <div className="container">
          <h3 style={{marginBottom: '28px', fontWeight: 600}}>Our Group Websites</h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '18px',
              alignItems: 'start'
            }}
          >
            {groupWebsites.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{textDecoration: 'none', color: '#222'}}
              >
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '8px',
                    marginBottom: '10px'
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    style={{width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px'}}
                  />
                </div>
                <div style={{fontSize: '14px', fontWeight: 600, textAlign: 'center'}}>{item.name}</div>
              </a>
            ))}
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
