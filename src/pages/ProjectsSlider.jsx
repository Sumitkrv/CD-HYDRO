import { Link } from 'react-router-dom';

function ProjectsSlider() {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
       
      <section className="text-light p-0">
        <div className="v-center">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="swiper-inner" data-bgimage="url(/assets/images/background/1.webp)">
                  <div className="sw-caption">
                    <div className="container" data-0="opacity:1;" data-300="opacity:0;">
                      <div className="row gx-5 align-items-center justify-content-center text-center">
                        <div className="col-lg-6"> 
                          <div className="sw-text-wrapper">
                            <div className="spacer-double"></div>
                            <div className="subtitle me-4 id-color">Home Installation</div>
                            <h1 className="wow anim-order-1">BrightHome Energy</h1>
                            <Link className="btn-main fx-slide" to="/project-single"><span>View Details</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay op-5"></div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="swiper-inner" data-bgimage="url(/assets/images/background/2.webp)">
                  <div className="sw-caption">
                    <div className="container" data-0="opacity:1;" data-300="opacity:0;">
                      <div className="row gx-5 align-items-center justify-content-center text-center">
                        <div className="col-lg-6"> 
                          <div className="sw-text-wrapper">
                            <div className="spacer-double"></div>
                            <div className="subtitle me-4 id-color">Turbine Upgrades</div>
                            <h1 className="wow anim-order-1">GreenMart Supermarket</h1>
                            <Link className="btn-main fx-slide" to="/project-single"><span>View Details</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay op-5"></div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="swiper-inner" data-bgimage="url(/assets/images/background/3.webp)">
                  <div className="sw-caption">
                    <div className="container" data-0="opacity:1;" data-300="opacity:0;">
                      <div className="row gx-5 align-items-center justify-content-center text-center">
                        <div className="col-lg-6"> 
                          <div className="sw-text-wrapper">
                            <div className="spacer-double"></div>
                            <div className="subtitle me-4 id-color">Custom System Design</div>
                            <h1 className="wow anim-order-1">EcoSchool Initiative</h1>
                            <Link className="btn-main fx-slide" to="/project-single"><span>View Details</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay op-5"></div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="swiper-inner" data-bgimage="url(/assets/images/background/4.webp)">
                  <div className="sw-caption">
                    <div className="container" data-0="opacity:1;" data-300="opacity:0;">
                      <div className="row gx-5 align-items-center justify-content-center text-center">
                        <div className="col-lg-6"> 
                          <div className="sw-text-wrapper">
                            <div className="spacer-double"></div>
                            <div className="subtitle me-4 id-color">System Monitoring & Reporting</div>
                            <h1 className="wow anim-order-1">Urban Hydro 360</h1>
                            <Link className="btn-main fx-slide" to="/project-single"><span>View Details</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay op-5"></div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="swiper-inner" data-bgimage="url(/assets/images/background/4.webp)">
                  <div className="sw-caption">
                    <div className="container" data-0="opacity:1;" data-300="opacity:0;">
                      <div className="row gx-5 align-items-center justify-content-center text-center">
                        <div className="col-lg-6"> 
                          <div className="sw-text-wrapper">
                            <div className="spacer-double"></div>
                            <div className="subtitle me-4 id-color">Community Project</div>
                            <h1 className="wow anim-order-1">CD HYDRO Cares</h1>
                            <Link className="btn-main fx-slide" to="/project-single"><span>View Details</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay op-5"></div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="swiper-inner" data-bgimage="url(/assets/images/background/5.webp)">
                  <div className="sw-caption">
                    <div className="container" data-0="opacity:1;" data-300="opacity:0;">
                      <div className="row gx-5 align-items-center justify-content-center text-center">
                        <div className="col-lg-6"> 
                          <div className="sw-text-wrapper">
                            <div className="spacer-double"></div>
                            <div className="subtitle me-4 id-color">Pumped Storage Integration</div>
                            <h1 className="wow anim-order-1">SunSmart Office</h1>
                            <Link className="btn-main fx-slide" to="/project-single"><span>View Details</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay op-5"></div>
                </div>
              </div>
            </div>
            
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsSlider;
