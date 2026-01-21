function Team() {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section id="subheader" className="bg-dark text-light relative jarallax">
        <img src="/assets/images/background/2.webp" className="jarallax-img" alt="" />
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Team</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><a href="index.html">Home</a></li>
                <li className="active">Team</li>
              </ul>   
            </div>
          </div>
        </div>

        <div className="sw-overlay"></div>
      </section>
      
      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="bg-white relative border-gray rounded-1 overflow-hidden">
                <img src="/assets/images/team/1.webp" className="w-100" alt="" />
                <div className="p-3 text-center">
                  <h4 className="mb-0">Thomas Bennett</h4>
                  <p className="mb-2">Solar Panel Installer</p>
                  <div className="social-icons">
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="bg-white relative border-gray rounded-1 overflow-hidden">
                <img src="/assets/images/team/2.webp" className="w-100" alt="" />
                <div className="p-3 text-center">
                  <h4 className="mb-0">Barbara Charline</h4>
                  <p className="mb-2">Solar Energy Consultant</p>
                  <div className="social-icons">
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="bg-white relative border-gray rounded-1 overflow-hidden">
                <img src="/assets/images/team/3.webp" className="w-100" alt="" />
                <div className="p-3 text-center">
                  <h4 className="mb-0">Joshua Henry</h4>
                  <p className="mb-2">Solar Maintenance Technician</p>
                  <div className="social-icons">
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="bg-white relative border-gray rounded-1 overflow-hidden">
                <img src="/assets/images/team/4.webp" className="w-100" alt="" />
                <div className="p-3 text-center">
                  <h4 className="mb-0">Madison Jane</h4>
                  <p className="mb-2">Solar Project Coordinator</p>
                  <div className="social-icons">
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
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

export default Team;
