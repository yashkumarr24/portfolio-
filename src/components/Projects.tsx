import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Finance Consultancy',
      description: 'Financial Consultancy for small and medium enterprises',
      image: '/images/image-2.webp',
      tags: ['react', 'javascript', 'html', 'css']
    },
    {
      id: 2,
      title: 'Interactive Dashboard',
      description: 'Real-time analytics with stunning visualizations',
      image: '/images/image-3.webp',
      tags: ['React', 'D3.js', 'MongoDB']
    }
  ];

  return (
    <section className="projects" id="websites">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Explore my latest work showcasing creativity and technical excellence
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                <div className="project-overlay">
                  <button className="view-project-btn">View Project →</button>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              {/* 3D floating elements */}
              <motion.div
                className="floating-element"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

