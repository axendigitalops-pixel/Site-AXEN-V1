import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CapsuleButton from '../UI/CapsuleButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Ecossistema', path: '/ecosystem' },
    { label: 'Quem Somos', path: '/about' },
    { label: 'Contato', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Hysteresis logic to prevent flickering near the threshold
      const scrollY = window.scrollY;
      if (scrollY > 60 && !scrolled) {
        setScrolled(true);
      } else if (scrollY < 40 && scrolled) {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Unified Navigation - Floating Capsule Style */}
      <motion.div 
        className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.nav
          className="pointer-events-auto flex items-center justify-between"
          initial={false}
          animate={{
            width: scrolled ? "90%" : "95%", // Slightly wider on initial state for mobile
            maxWidth: scrolled ? "900px" : "1400px",
            marginTop: scrolled ? "1rem" : "1.5rem", // Reduced top margin for mobile friendliness
            padding: scrolled ? "0.75rem 1rem" : "1rem 1.5rem", // Responsive padding values
            backgroundColor: scrolled ? "rgba(5, 5, 5, 0.85)" : "rgba(5, 5, 5, 0)",
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
            borderRadius: "9999px",
            border: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
            boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5)" : "none",
          }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0 pl-1 md:pl-2 md:mr-8 relative z-50">
            <img 
              src="https://i.im.ge/2026/02/12/ePclFX.LOGOS-AXEN-V1-2.png" 
              alt="Axen Logo" 
              className="h-10 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 mx-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs uppercase tracking-widest font-bold transition-all duration-300 relative group py-2 ${
                  location.pathname === item.path ? 'text-white' : 'text-axen-gray hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-axen-turquoise rounded-full"
                    transition={{ duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:ml-8 shrink-0 relative z-50">
            {/* Desktop CTA */}
            <div className="hidden md:block">
               <Link to="/contact">
                  <CapsuleButton 
                    variant="outline" 
                    size={scrolled ? "small" : "normal"}
                    className="!border-white/20 !text-white hover:!border-white hover:!bg-white hover:!text-black transition-all duration-700"
                  >
                    Acesso
                  </CapsuleButton>
               </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-axen-ivory p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 40px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-axen-black z-40 flex flex-col items-center justify-center md:hidden"
            style={{ paddingTop: '80px' }} // Spacing for the header
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-axen-turquoise/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-display font-bold text-axen-ivory hover:text-axen-turquoise transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <CapsuleButton className="!text-lg !px-10 !py-4">Acesso</CapsuleButton>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;