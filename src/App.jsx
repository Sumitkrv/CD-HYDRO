import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Index from './pages/Index';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import GetAQuote from './pages/GetAQuote';
import HowItWorks from './pages/HowItWorks';
import Industries from './pages/Industries';
import ProjectSingle from './pages/ProjectSingle';
import Projects from './pages/Projects';
import ProjectsCarousel from './pages/ProjectsCarousel';
import ProjectsSlider from './pages/ProjectsSlider';
import Services from './pages/Services';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // === NUCLEAR FIX ===
    // 1. Hide the de-loader overlay (full-screen white div, z-index 20000)
    //    On SPA navigation, window.load never fires again so it stays visible.
    const loader = document.getElementById('de-loader');
    if (loader) loader.style.display = 'none';

    // 2. Strip 'wow' class from ALL elements so WOW.js MutationObserver
    //    can't find and re-hide them. Also strip all animation inline styles.
    const cleanWowEl = (el) => {
      el.classList.remove('wow');
      el.classList.remove('animated');
      el.style.visibility = '';
      el.style.animationName = '';
      el.style.animationDelay = '';
      el.style.animationDuration = '';
      el.style.animationIterationCount = '';
      el.style.animationFillMode = '';
      el.style.webkitAnimationName = '';
      el.style.webkitAnimationDelay = '';
      el.style.webkitAnimationDuration = '';
      el.style.webkitAnimationIterationCount = '';
      el.style.opacity = '';
      el.style.transform = '';
    };
    document.querySelectorAll('.wow').forEach(cleanWowEl);
    // Also clean elements WOW.js has already activated (it removes .wow and adds .animated)
    document.querySelectorAll('.animated').forEach(cleanWowEl);

    // Reinitialize layout-dependent JS plugins after route change
    setTimeout(() => {
      if (typeof jQuery !== 'undefined') {

        // Keep de-loader hidden
        jQuery('#de-loader').hide();

        // Strip wow/animated class again (in case WOW MutationObserver re-added styles)
        document.querySelectorAll('.wow, .animated').forEach(el => {
          el.classList.remove('wow');
          el.classList.remove('animated');
          el.style.visibility = '';
          el.style.animationName = '';
          el.style.animationDelay = '';
          el.style.animationDuration = '';
          el.style.animationIterationCount = '';
          el.style.animationFillMode = '';
          el.style.opacity = '';
          el.style.transform = '';
        });
        // DO NOT reinitialize WOW.js — it re-hides all elements.
        // The CSS !important rule keeps .wow and .animated elements visible.
        
        // --- Jarallax: Destroy old instances then reinitialize ---
        if (jQuery.fn.jarallax) {
          document.querySelectorAll('[id^="jarallax-container"]').forEach(el => el.remove());
          jQuery('.jarallax').each(function() {
            this.removeAttribute('data-jarallax-original-styles');
            if (this.jarallax) {
              try { this.jarallax.destroy(); } catch(e) {}
              delete this.jarallax;
            }
          });
          jQuery('.jarallax').jarallax({ speed: 0.2 });
        }

        // --- Counters ---
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

        // --- fx-slide button data-hover ---
        jQuery('.fx-slide').each(function() {
          var text = jQuery(this).find('span').text() || jQuery(this).text();
          jQuery(this).attr('data-hover', text);
        });
        
        // --- Swiper carousels ---
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
        
        // --- Owl Carousel ---
        if (jQuery.fn.owlCarousel) {
          jQuery('.owl-3-cols:not(.owl-loaded)').owlCarousel({ center: false, loop: true, margin: 30, nav: false, dots: true, responsive: { 1000: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } } });
          jQuery('.owl-4-cols:not(.owl-loaded)').owlCarousel({ center: false, loop: true, margin: 30, nav: false, dots: false, responsive: { 1000: { items: 4 }, 600: { items: 2 }, 0: { items: 1 } } });
          jQuery('.owl-2-cols:not(.owl-loaded)').owlCarousel({ center: false, loop: true, margin: 30, nav: false, dots: false, responsive: { 1000: { items: 2 }, 600: { items: 2 }, 0: { items: 1 } } });
          jQuery('.owl-carousel:not(.owl-3-cols):not(.owl-4-cols):not(.owl-2-cols):not(.owl-loaded)').owlCarousel({ loop: true, margin: 10, nav: false, dots: true, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } } });
        }

        // --- Marquee reinitialization ---
        if (jQuery.fn.marquee) {
          try { jQuery('.de-marquee-list').marquee('destroy'); } catch(e) {}
          try { jQuery('.de-marquee-list-2').marquee('destroy'); } catch(e) {}
          try { jQuery('.wm-carousel').marquee('destroy'); } catch(e) {}
          jQuery('.de-marquee-list').marquee({ direction: 'left', duration: 60000, gap: 0, delayBeforeStart: 0, duplicated: true, startVisible: true });
          jQuery('.de-marquee-list-2').marquee({ direction: 'right', duration: 60000, gap: 0, delayBeforeStart: 0, duplicated: true, startVisible: true });
          jQuery('.wm-carousel').marquee({ direction: 'left', duration: 20000, gap: 100, delayBeforeStart: 0, duplicated: true, startVisible: false });
        }

        // --- Accordion reinitialization ---
        jQuery('.accordion-section-title').off('click').on('click', function(e) {
          e.preventDefault();
          var tab = jQuery(this).attr('data-tab');
          jQuery('.accordion-section-content').not(tab).slideUp();
          jQuery(tab).slideToggle();
          jQuery('.accordion-section-title').not(this).removeClass('active');
          jQuery(this).toggleClass('active');
        });

        // Force window resize event to recalculate layouts
        window.dispatchEvent(new Event('resize'));
      }
    }, 200);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div id="wrapper">
        <a href="#" id="back-to-top"></a>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/project-single" element={<ProjectSingle />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-carousel" element={<ProjectsCarousel />} />
          <Route path="/projects-slider" element={<ProjectsSlider />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
