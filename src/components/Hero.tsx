import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Hero.css';
import ImageTrail from './ImageTrail';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }
  }, []);

  // Auto-changing images for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 20); // 20 images total
    }, 400); // Change every 0.4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Desktop: Image Trail Effect */}
      <div className="hero-trail desktop-only">
        <ImageTrail />
      </div>
      
      {/* Mobile: Static Design */}
      <div className="mobile-hero-design">
        <div className="mobile-not-text">Not</div>
        <div className="mobile-a-text">a</div>
        <div className="mobile-images-container">
          <div className="mobile-auto-images">
            <img
              src={`/images/image-${(currentImageIndex % 15) + 1}.webp`}
              alt="Portfolio"
              className="mobile-image active"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="mobile-developer-text">Developer</div>
        <div className="mobile-tagline">WHERE CODE MEETS CREATIVITY — AND MAGIC HAPPENS</div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <motion.h1
          ref={titleRef}
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="title-line light-blue">Not </span>
          <span className="title-line light-blue">a </span>
          <span className="title-line white">Developer</span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          WHERE CODE MEETS CREATIVITY — AND MAGIC HAPPENS
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="scroll-circle"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Lightning Icon */}
      <motion.div
        className="lightning-icon"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2 }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
        </svg>
      </motion.div>

    </section>
  );
};

export default Hero;

