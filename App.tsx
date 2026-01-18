import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { StarField } from './components/StarField';
import { Footer } from './components/Footer';

// Lazy Load components below the fold for performance
import { Home } from './pages/Home';

// Blog components will be lazy loaded
const BlogIndex = React.lazy(() => import('./pages/BlogIndex'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

// Legal pages will be lazy loaded
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden selection:bg-purple-500/30 selection:text-white">
          {/* Background Star Animation (Global) */}
          <StarField />

          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>

          {/* Footer (Global) */}
          <Footer />
        </div>
      </Router>
      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  );
}

export default App;
