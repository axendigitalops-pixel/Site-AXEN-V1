import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-axen-black text-axen-ivory font-body selection:bg-axen-turquoise selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback routes for demo completeness */}
            <Route path="/careers" element={<About />} /> 
            <Route path="/privacy" element={<div className="pt-32 container px-6">Política de Privacidade...</div>} />
            <Route path="/terms" element={<div className="pt-32 container px-6">Termos de Uso...</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;