
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Splash } from './components/Splash';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { StrategyConsulting } from './components/StrategyConsulting';
import { Development } from './components/Development';
import { Creative } from './components/Creative';
import { SocialMedia } from './components/SocialMedia';
import { PPCAdvertising } from './components/PPCAdvertising';
import { SEO } from './components/SEO';
import { Footer } from './components/Footer';
import { BackgroundAnimation } from './components/BackgroundAnimation';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="relative font-sans antialiased text-white selection:bg-podPurple selection:text-white min-h-screen">
        {loading && <Splash onComplete={() => setLoading(false)} />}

        {!loading && (
          <div className="animate-fade-in bg-black min-h-screen">
            {/* Global Staggered Background */}
            <BackgroundAnimation />

            <div className="relative z-10">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/strategy-consulting" element={<StrategyConsulting />} />
                <Route path="/development" element={<Development />} />
                <Route path="/creative" element={<Creative />} />
                <Route path="/social-media" element={<SocialMedia />} />
                <Route path="/ppc-advertising" element={<PPCAdvertising />} />
                <Route path="/seo-organic-growth" element={<SEO />} />
              </Routes>
              <Footer />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
