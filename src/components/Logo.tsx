import React from 'react';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <svg 
        className="logo-svg" 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brushstroke "n" path */}
        <path
          d="M40 140 Q50 120 70 130 Q90 140 110 120 Q130 100 150 110 Q160 115 160 130"
          stroke="#FF4444"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="logo-brushstroke"
        />
        
        {/* Additional brushstroke details for texture */}
        <path
          d="M45 135 Q55 115 75 125 Q95 135 115 115 Q135 95 155 105"
          stroke="#FF4444"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
          className="logo-texture"
        />
        
        {/* Highlight stroke */}
        <path
          d="M42 142 Q52 122 72 132 Q92 142 112 122 Q132 102 152 112"
          stroke="#FF6B6B"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
          className="logo-highlight"
        />
      </svg>
    </div>
  );
};

export default Logo;

