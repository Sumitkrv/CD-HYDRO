import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: 'Hydroelectric Power Plants',
      subtitle: 'Clean Baseload',
      desc: 'We develop and operate hydroelectric systems that provide dependable, long-life clean energy for utilities, industries, and regional grids.',
      points: ['Round-the-clock renewable output', 'Low lifecycle emissions', 'Long asset life and high reliability'],
      image: '/assets/images/background/1.webp',
    },
    {
      title: 'Green Hydrogen Integration',
      subtitle: 'Future Fuel',
      desc: 'Our hydro-powered energy systems support electrolyzer operations to produce green hydrogen, enabling deep decarbonization for hard-to-abate sectors.',
      points: ['Hydro-powered electrolysis readiness', 'Stable input power for hydrogen production', 'Aligned with India’s net-zero strategy'],
      image: '/assets/images/background/2.webp',
    },
    {
      title: 'Grid Stability Solutions',
      subtitle: 'Smart Grid',
      desc: 'We improve grid resilience with flexible hydro generation profiles that balance variable renewables and strengthen system reliability.',
      points: ['Balancing support for renewable-heavy grids', 'Frequency and load stability support', 'Improved reliability during peak demand'],
      image: '/assets/images/background/3.webp',
    },
  ];

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light relative jarallax">
        <img src="/assets/images/background/w2.webp" className="jarallax-img" alt="" />
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Our Services</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Our Services</li>
              </ul>   
            </div>
          </div>
        </div>

        <div className="gradient-edge-bottom h-50"></div>
        <div className="sw-overlay"></div>
      </section>
       
      <section style={{background: 'linear-gradient(180deg, #f8fbff 0%, #eef4fa 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: '-120px', right: '-70px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,170,255,0.18) 0%, rgba(0,170,255,0.03) 60%, rgba(0,170,255,0) 72%)'}}></div>
        <div style={{position: 'absolute', bottom: '-130px', left: '-110px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(12,77,125,0.12) 0%, rgba(12,77,125,0.02) 60%, rgba(12,77,125,0) 72%)'}}></div>

        <style>{`
          .service-feature-row {
            padding: 26px 0;
            border-top: 1px solid rgba(15,45,80,.12);
          }
          .service-feature-media {
            height: 260px;
            border-radius: 12px;
            overflow: hidden;
          }
          .service-feature-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform .7s cubic-bezier(.22,.61,.36,1);
          }
          .service-feature-content {
            transition: transform .3s ease;
          }
          .service-feature-row:hover .service-feature-media img {
            transform: scale(1.07);
          }
          .service-feature-row:hover .service-feature-content {
            transform: translateX(8px);
          }
          .service-points {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
          }
          .service-points li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: #1f2d3d;
          }
          .service-points li::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-top: 9px;
            background: var(--color-2, #00aaff);
            flex-shrink: 0;
          }
          .service-cta-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-2, #00aaff);
            font-weight: 700;
            text-decoration: none;
            margin-top: 16px;
          }
          .service-cta-icon {
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
          .service-feature-row:hover .service-cta-icon {
            background: var(--color-2, #00aaff);
            color: #fff;
            border-color: transparent;
          }

          @media (max-width: 991px) {
            .service-feature-row {
              padding: 18px 0;
            }
            .service-feature-media {
              height: 200px;
            }
            .service-feature-content {
              padding-top: 4px;
            }
          }
        `}</style>

        <div className="container">
          <div className="row g-4 justify-content-center text-center mb-2">
            <div className="col-lg-8">
              <div className="subtitle wow fadeInUp mb-3">What We Deliver</div>
              <h2 className="wow fadeInUp" data-wow-delay=".1s">Built for Reliability, Efficiency, and <span className="op-3">Long-Term Impact</span></h2>
              <p className="lead wow fadeInUp" data-wow-delay=".2s">A refined service experience with engineering-first planning, climate-aligned execution, and dependable operational outcomes.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="service-feature-row row align-items-center g-4 wow fadeInUp"
                  data-wow-delay={`.${index + 1}s`}
                >
                  <div className={`col-lg-5 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                    <div className="service-feature-media">
                      <img src={service.image} alt={service.title} />
                    </div>
                  </div>

                  <div className={`col-lg-7 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                    <div className="service-feature-content">
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px'}}>
                        <span style={{fontSize: '34px', fontWeight: 700, lineHeight: 1, color: 'rgba(10,58,98,0.25)'}}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span style={{fontSize: '12px', fontWeight: 700, letterSpacing: '.35px', textTransform: 'uppercase', color: '#0c4d7d', background: 'rgba(18,129,208,0.12)', borderRadius: '999px', padding: '6px 12px'}}>
                          {service.subtitle}
                        </span>
                      </div>

                      <h3 className="mb-2">{service.title}</h3>
                      <p className="mb-3" style={{maxWidth: '680px'}}>{service.desc}</p>

                      <ul className="service-points mb-0">
                        {service.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      <Link to="/get-a-quote" className="service-cta-link">
                        <span>Request Proposal</span>
                        <span className="service-cta-icon"><i className="fa-solid fa-arrow-right"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{borderTop: '1px solid rgba(15,45,80,.12)', marginTop: '8px', paddingTop: '26px'}} className="text-center">
                <Link className="btn-main fx-slide" to="/contact"><span>Talk to Our Team</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-light pt-60 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="relative">
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

export default Services;
