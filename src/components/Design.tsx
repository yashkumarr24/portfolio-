import React from 'react';
import './Design.css';

const Design: React.FC = () => {
  return (
    <section className="design">
      <div className="design-container">
        {/* Graphics Icon */}
        <div className="graphics-icon">
          <div className="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#FF4444"/>
              <circle cx="12" cy="12" r="3" fill="#FF6B6B"/>
              <path d="M12 1L13.5 7.5L20 9L13.5 10.5L12 17L10.5 10.5L4 9L10.5 7.5L12 1Z" stroke="#FF4444" strokeWidth="0.5" fill="none"/>
            </svg>
          </div>
          <span className="icon-label">Graphics</span>
        </div>

        {/* Main Title */}
        <h1 className="design-title">Design to Stare</h1>
        
        {/* Tagline */}
        <p className="design-tagline">
          We create the most stunning graphic designs for your social media, websites, branding, or literally anything. They are just mindblowing
        </p>

        {/* Participation Line with Light Shine */}
        <div className="participation-line">
          <div className="line-shine"></div>
          <div className="participation-text">Join Our Creative Journey</div>
        </div>

        {/* Design Cards Container */}
        <div className="design-cards-container">
          <div className="design-cards">
            {/* Card 1 - Portfolio Image 1 */}
            <div className="design-card card-1">
              <div className="card-content">
                <img src="/images/project-1.webp" alt="Portfolio Project 1" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Creative Design</h3>
                  <p className="card-subtitle">Brand Identity</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Portfolio Image 2 */}
            <div className="design-card card-2">
              <div className="card-content">
                <img src="/images/project-2.webp" alt="Portfolio Project 2" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Web Design</h3>
                  <p className="card-subtitle">Modern Interface</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Portfolio Image 3 */}
            <div className="design-card card-3">
              <div className="card-content">
                <img src="/images/project-3.webp" alt="Portfolio Project 3" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Mobile App</h3>
                  <p className="card-subtitle">User Experience</p>
                </div>
              </div>
            </div>

            {/* Card 4 - Portfolio Image 4 */}
            <div className="design-card card-4">
              <div className="card-content">
                <img src="/images/project-4.webp" alt="Portfolio Project 4" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Digital Art</h3>
                  <p className="card-subtitle">Visual Storytelling</p>
                </div>
              </div>
            </div>

            {/* Card 5 - Image 1 */}
            <div className="design-card card-5">
              <div className="card-content">
                <img src="/images/image-1.webp" alt="Design Work 1" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Graphic Design</h3>
                  <p className="card-subtitle">Print Media</p>
                </div>
              </div>
            </div>

            {/* Card 6 - Image 2 */}
            <div className="design-card card-6">
              <div className="card-content">
                <img src="/images/image-2.webp" alt="Design Work 2" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Social Media</h3>
                  <p className="card-subtitle">Content Creation</p>
                </div>
              </div>
            </div>

            {/* Card 7 - Image 3 */}
            <div className="design-card card-7">
              <div className="card-content">
                <img src="/images/image-3.webp" alt="Design Work 3" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Logo Design</h3>
                  <p className="card-subtitle">Brand Identity</p>
                </div>
              </div>
            </div>

            {/* Card 8 - Image 4 */}
            <div className="design-card card-8">
              <div className="card-content">
                <img src="/images/image-4.webp" alt="Design Work 4" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">UI/UX Design</h3>
                  <p className="card-subtitle">User Interface</p>
                </div>
              </div>
            </div>

            {/* Card 9 - Image 5 */}
            <div className="design-card card-9">
              <div className="card-content">
                <img src="/images/image-5.webp" alt="Design Work 5" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Illustration</h3>
                  <p className="card-subtitle">Digital Art</p>
                </div>
              </div>
            </div>

            {/* Card 10 - Image 6 */}
            <div className="design-card card-10">
              <div className="card-content">
                <img src="/images/image-6.webp" alt="Design Work 6" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Photography</h3>
                  <p className="card-subtitle">Visual Content</p>
                </div>
              </div>
            </div>

            {/* Card 11 - Image 7 */}
            <div className="design-card card-11">
              <div className="card-content">
                <img src="/images/image-7.webp" alt="Design Work 7" className="card-image" loading="lazy" decoding="async" />
                <div className="card-overlay">
                  <h3 className="card-title">Marketing</h3>
                  <p className="card-subtitle">Campaign Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Icon removed as requested */}
      </div>
    </section>
  );
};

export default Design;
