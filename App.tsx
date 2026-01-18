import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { StarField } from './components/StarField';
import { Footer } from './components/Footer';

// Lazy Load components below the fold for performance
import { Home } from './pages/Home';

import { ScrollToTop } from './components/ScrollToTop';

// Blog components will be lazy loaded
const BlogIndex = React.lazy(() => import('./pages/BlogIndex'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden selection:bg-purple-500/30 selection:text-white">
          {/* Background Star Animation (Global) */}
          <StarField />

          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>

          {/* Footer (Global) */}
          <Footer />

          {/* Vercel Analytics */}
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
