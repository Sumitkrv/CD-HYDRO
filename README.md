# CD HYDRO React - Hydroelectric & Green Hydrogen Energy Website

This is a React + Vite application for CD Hydro - a hydroelectric and green hydrogen energy solutions provider.

## Project Structure

```
solaria-react/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Header.jsx
    │   └── Footer.jsx
    ├── pages/
    │   ├── Index.jsx
    │   ├── About.jsx
    │   ├── Blog.jsx
    │   ├── BlogSingle.jsx
    │   ├── Careers.jsx
    │   ├── Contact.jsx
    │   ├── FAQ.jsx
    │   ├── GetAQuote.jsx
    │   ├── Homepage2.jsx
    │   ├── Homepage3.jsx
    │   ├── Homepage4.jsx
    │   ├── Homepage5.jsx
    │   ├── HowItWorks.jsx
    │   ├── Industries.jsx
    │   ├── ProjectSingle.jsx
    │   ├── Projects.jsx
    │   ├── ProjectsCarousel.jsx
    │   ├── ProjectsSlider.jsx
    │   ├── ServiceArea.jsx
    │   ├── ServiceSingle.jsx
    │   ├── Services.jsx
    │   ├── Services2.jsx
    │   ├── Team.jsx
    │   └── Testimonials.jsx
    └── assets/
        ├── css/
        │   ├── bootstrap.min.css
        │   ├── bootstrap.rtl.min.css
        │   ├── custom-swiper-1.css
        │   ├── datepicker.css
        │   ├── plugins.css
        │   ├── style.css
        │   ├── swiper.css
        │   └── colors/
        │       ├── scheme-1.css
        │       ├── scheme-2.css
        │       └── scheme-3.css
        ├── js/
        │   ├── custom-marquee.js
        │   ├── custom-swiper-1.js
        │   ├── custom-swiper-2.js
        │   ├── custom-swiper-3.js
        │   ├── designesia.js
        │   ├── plugins.js
        │   ├── swiper.js
        │   ├── validation-booking.js
        │   └── validation-contact.js
        ├── images/
        ├── fonts/
        └── video/
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Tech Stack

- React 18
- Vite
- React Router DOM 6
- Bootstrap (loaded globally)
- jQuery (loaded globally)
- Original template CSS/JS (loaded globally)

## Routes

- `/` - Homepage
- `/about` - About Us
- `/blog` - Blog
- `/blog-single` - Blog Single Post
- `/careers` - Careers
- `/contact` - Contact
- `/faq` - FAQ
- `/get-a-quote` - Get A Quote
- `/homepage-2` - Homepage 2
- `/homepage-3` - Homepage 3
- `/homepage-4` - Homepage 4
- `/homepage-5` - Homepage 5
- `/how-it-works` - How It Works
- `/industries` - Industries We Serve
- `/project-single` - Project Single
- `/projects` - Projects
- `/projects-carousel` - Projects Carousel
- `/projects-slider` - Projects Slider
- `/service-area` - Service Area
- `/service-single` - Service Single
- `/services` - All Services Style 1
- `/services-2` - All Services Style 2
- `/team` - Our Team
- `/testimonials` - Testimonials

## Conversion Notes

- All HTML files converted to React components
- Original folder structure preserved in assets
- Bootstrap, jQuery, and template JS loaded globally via index.html
- All CSS files remain unchanged
- All image/font/video assets copied as-is
- React Router used for navigation
- Original HTML behavior and appearance preserved exactly
