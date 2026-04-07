import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_DETAILS } from '../constants';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-solar-blue p-1.5 rounded-lg">
              <Sun className="w-6 h-6 text-solar-gold" />
            </div>
            <div className="flex flex-col">
              <span className={cn("text-xl font-bold leading-none", isScrolled ? "text-solar-blue" : "text-solar-blue")}>
                P & G SOLAR
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-solar-gold">
                No. 1 Solar EPC Company
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-solar-gold",
                  location.pathname === link.path ? "text-solar-gold" : "text-solar-navy"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT_DETAILS.phone1.replace(/\s/g, '')}`}
              className="btn-primary py-2 px-4 text-sm"
            >
              <Phone className="w-4 h-4" />
              {CONTACT_DETAILS.phone1}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-solar-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-solar-grey overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium border-b border-solar-grey last:border-0",
                    location.pathname === link.path ? "text-solar-gold" : "text-solar-navy"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${CONTACT_DETAILS.phone1.replace(/\s/g, '')}`}
                  className="btn-primary w-full"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
