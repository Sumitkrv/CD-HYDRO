import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Index from './pages/Index';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import GetAQuote from './pages/GetAQuote';
import Homepage2 from './pages/Homepage2';
import Homepage3 from './pages/Homepage3';
import Homepage4 from './pages/Homepage4';
import Homepage5 from './pages/Homepage5';
import HowItWorks from './pages/HowItWorks';
import Industries from './pages/Industries';
import ProjectSingle from './pages/ProjectSingle';
import Projects from './pages/Projects';
import ProjectsCarousel from './pages/ProjectsCarousel';
import ProjectsSlider from './pages/ProjectsSlider';
import ServiceArea from './pages/ServiceArea';
import ServiceSingle from './pages/ServiceSingle';
import Services from './pages/Services';
import Services2 from './pages/Services2';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reinitialize all JS plugins after route change
    setTimeout(() => {
      if (typeof jQuery !== 'undefined') {
        // Reinitialize WOW animations
        if (typeof WOW !== 'undefined') {
          new WOW().init();
        }
        
        // Reinitialize counters
        jQuery('.timer').each(function() {
          const $this = jQuery(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.data('to') }, {
            duration: $this.data('speed') || 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        
        // Reinitialize carousels
        if (typeof Swiper !== 'undefined') {
          document.querySelectorAll('.swiper:not(.swiper-initialized)').forEach(el => {
            new Swiper(el, {
              loop: true,
              autoplay: { delay: 5000 },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              }
            });
          });
        }
        
        // Reinitialize Owl Carousel
        if (jQuery.fn.owlCarousel) {
          jQuery('.owl-carousel:not(.owl-loaded)').each(function() {
            jQuery(this).owlCarousel({
              loop: true,
              margin: 10,
              nav: true,
              responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
              }
            });
          });
        }
        
        // Reinitialize jarallax
        if (jQuery.fn.jarallax) {
          jQuery('.jarallax').jarallax({
            speed: 0.2
          });
        }
      }
    }, 100);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div id="wrapper">
        <a href="#" id="back-to-top"></a>
        
        <div id="de-loader"></div>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
          <Route path="/homepage-2" element={<Homepage2 />} />
          <Route path="/homepage-3" element={<Homepage3 />} />
          <Route path="/homepage-4" element={<Homepage4 />} />
          <Route path="/homepage-5" element={<Homepage5 />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/project-single" element={<ProjectSingle />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-carousel" element={<ProjectsCarousel />} />
          <Route path="/projects-slider" element={<ProjectsSlider />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/service-single" element={<ServiceSingle />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-2" element={<Services2 />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
