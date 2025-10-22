import React from 'react';
import './ElectricLine.css';

interface ElectricLineProps {
  className?: string;
  position?: 'top' | 'center' | 'bottom';
}

const ElectricLine: React.FC<ElectricLineProps> = ({ className = '', position = 'center' }) => {
  return (
    <div className={`electric-line-container ${className} ${position}`}>
      <div className="electric-line">
        <div className="electric-shine"></div>
        <div className="electric-sparks">
          <div className="spark spark-1"></div>
          <div className="spark spark-2"></div>
          <div className="spark spark-3"></div>
          <div className="spark spark-4"></div>
          <div className="spark spark-5"></div>
        </div>
        <div className="electric-glow"></div>
      </div>
    </div>
  );
};

export default ElectricLine;

