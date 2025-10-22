import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <img src="/images/profile.webp" alt="Profile" loading="lazy" decoding="async" />
            <div className="image-overlay"></div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm Yash Kumar, a 3rd-year BCA student passionate about Python backend development. 
            Currently honing my skills at TOPS Technology where I build scalable and efficient solutions. 
            I love coding, learning, and turning ideas into reality!
          </p>
          <p className="about-text">
            With expertise in Python, C, and web development, I focus on crafting robust backend 
            systems and APIs. Every project is an opportunity to learn and grow, whether it's 
            building REST APIs, working with databases, or creating efficient server-side logic.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>6+</h3>
              <p>Repositories</p>
            </div>
            <div className="stat">
              <h3>3rd</h3>
              <p>Year BCA Student</p>
            </div>
            <div className="stat">
              <h3>2+</h3>
              <p>Years Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

