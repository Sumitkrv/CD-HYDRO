# SOLARIA REACT - COMPLETE SOURCE CODE REFERENCE

This document contains all key source code files for easy reference.

---

## 1. package.json

```json
{
  "name": "solaria-react",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

---

## 2. vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
```

---

## 3. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/src/assets/images/icon.webp" type="image/gif" sizes="16x16">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Solaria - Ecology & Solar Energy HTML Template" />
    <title>Solaria - Solar Energy HTML Template</title>
    
    <!-- CSS Files -->
    <link href="/src/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">
    <link href="/src/assets/css/plugins.css" rel="stylesheet" type="text/css">
    <link href="/src/assets/css/swiper.css" rel="stylesheet" type="text/css">
    <link href="/src/assets/css/style.css" rel="stylesheet" type="text/css">
    <link href="/src/assets/css/custom-swiper-1.css" rel="stylesheet" type="text/css">
    <link href="/src/assets/css/datepicker.css" rel="stylesheet" type="text/css">
    <link id="colors" href="/src/assets/css/colors/scheme-1.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div id="root"></div>
    
    <!-- Javascript Files -->
    <script src="/src/assets/js/plugins.js"></script>
    <script src="/src/assets/js/designesia.js"></script>
    <script src="/src/assets/js/swiper.js"></script>
    <script src="/src/assets/js/custom-swiper-1.js"></script>
    <script src="/src/assets/js/custom-swiper-2.js"></script>
    <script src="/src/assets/js/custom-swiper-3.js"></script>
    <script src="/src/assets/js/custom-marquee.js"></script>
    <script src="/src/assets/js/validation-contact.js"></script>
    <script src="/src/assets/js/validation-booking.js"></script>
    
    <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

---

## 4. src/main.jsx

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 5. src/App.jsx

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
```

---

## 6. src/components/Header.jsx

See `/Users/Sumit/Desktop/Solaria/solaria-react/src/components/Header.jsx`

---

## 7. src/components/Footer.jsx

See `/Users/Sumit/Desktop/Solaria/solaria-react/src/components/Footer.jsx`

---

## 8. All Page Components

Located in `/Users/Sumit/Desktop/Solaria/solaria-react/src/pages/`:

- Index.jsx
- About.jsx
- Blog.jsx
- BlogSingle.jsx
- Careers.jsx
- Contact.jsx
- FAQ.jsx
- GetAQuote.jsx
- Homepage2.jsx
- Homepage3.jsx
- Homepage4.jsx
- Homepage5.jsx
- HowItWorks.jsx
- Industries.jsx
- ProjectSingle.jsx
- Projects.jsx
- ProjectsCarousel.jsx
- ProjectsSlider.jsx
- ServiceArea.jsx
- ServiceSingle.jsx
- Services.jsx
- Services2.jsx
- Team.jsx
- Testimonials.jsx

Each page component follows this structure:

```javascript
function PageName() {
    return (
        <div className="no-bottom no-top" id="content">
            {/* Page-specific content here */}
        </div>
    );
}

export default PageName;
```

---

## FOLDER STRUCTURE

```
solaria-react/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
├── PROJECT-COMPLETE.md
├── CONVERSION-COMPLETE.md
├── SOURCE-CODE.md (this file)
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
        ├── js/
        ├── images/
        ├── fonts/
        └── video/
```

---

## COMMANDS

```bash
# Install dependencies
cd /Users/Sumit/Desktop/Solaria/solaria-react
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ACCESS

**Development Server**: http://localhost:3000/
**Project Location**: /Users/Sumit/Desktop/Solaria/solaria-react/

---

**All source code is available in the project directory.**
**The application is running and ready to use!**
