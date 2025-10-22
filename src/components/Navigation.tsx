import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';
import Logo from './Logo';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Websites', href: '#websites' },
    { name: 'Ads', href: '#ads' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <Logo />
        </div>

        <div className="nav-links">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`nav-link ${index === 0 ? 'active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button className="nav-cta">
          Let's Talk
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mobile-menu"
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="mobile-link" onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;

