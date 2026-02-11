import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Triangle } from 'lucide-react';
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
      {/* Desktop Navigation - Floating Capsule Style */}
      <motion.div 
        className="fixed top-0 left-0 w-full z-50 hidden md:flex justify-center pointer-events-none"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.nav
          className="pointer-events-auto flex items-center justify-between"
          initial={false}
          animate={{
            width: scrolled ? "auto" : "90%", // Starts wide (90%), shrinks to fit content (auto)
            maxWidth: scrolled ? "900px" : "1400px", // Limits width in both states
            marginTop: scrolled ? "1.5rem" : "2rem",
            padding: scrolled ? "0.75rem 1rem" : "1.25rem 2.5rem", // Smooth padding reduction
            backgroundColor: scrolled ? "rgba(5, 5, 5, 0.85)" : "rgba(5, 5, 5, 0)", // Transparent at absolute top for cleaner look
            backdropFilter: scrolled ? "blur(16px)" : "blur(0px)", // No blur at top to show bg clearly
            borderRadius: "9999px", // Always rounded capsule
            border: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)", // No border at top
            boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.5)" : "none",
            gap: scrolled ? "0rem" : "2rem", // Adjust internal spacing if needed
          }}
          // Ultra smooth bezier curve for luxurious feel
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group mr-4 md:mr-8 shrink-0 pl-2">
            <div className="relative w-6 h-6">
              <Triangle className="w-6 h-6 text-axing-ivory fill-current transform rotate-180 group-hover:text-axing-turquoise transition-colors duration-300" />
            </div>
            <span className="text-xl font-display font-bold text-axing-ivory tracking-tighter group-hover:text-white transition-colors">
              AXING
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-4 lg:gap-8 mx-2 lg:mx-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs uppercase tracking-widest font-bold transition-all duration-300 relative group py-2 ${
                  location.pathname === item.path ? 'text-white' : 'text-axing-gray hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-axing-turquoise rounded-full"
                    transition={{ duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="ml-4 md:ml-8 shrink-0 pr-1">
            <Link to="/contact">
              <CapsuleButton 
                variant="outline" 
                size={scrolled ? "small" : "normal"} // Dynamically change size
                className="!border-white/20 !text-white hover:!border-white hover:!bg-white hover:!text-black transition-all duration-700"
              >
                Acesso
              </CapsuleButton>
            </Link>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile Navigation - Classic Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-axing-black/90 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
           <Triangle className="w-6 h-6 text-axing-ivory fill-current transform rotate-180" />
           <span className="text-xl font-display font-bold text-axing-ivory tracking-tighter">AXING</span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-axing-ivory p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 w-full bg-axing-black z-40 overflow-hidden md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display font-bold text-axing-ivory hover:text-axing-turquoise transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <CapsuleButton>Ativar Núcleo</CapsuleButton>
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