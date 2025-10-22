import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      {/* Background with dotted pattern */}
      <div className="services-background">
        <div className="dotted-pattern"></div>
        <div className="center-glow"></div>
      </div>

      {/* Top Informational Banner */}
      <motion.div
        className="info-banner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="banner-content">
          <div className="green-dot"></div>
          <span className="banner-text">Get ready to level up your digital presence</span>
          <span className="rocket-emoji">🚀</span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        className="services-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="services-headline">
          <span className="headline-text white">We Craft</span>
          <span className="headline-text teal">Sites</span>
          <span className="headline-text white">that</span>
          <span className="headline-text teal">Convert</span>
          <br />
          <span className="headline-text white">&</span>
          <span className="headline-text teal">Brands</span>
          <span className="headline-text white">that</span>
          <span className="headline-text teal">Grow</span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Top-Tier Web Design & Digital Experiences for High-Impact Brands
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.button>
      </motion.div>

    </section>
  );
};

export default Services;
