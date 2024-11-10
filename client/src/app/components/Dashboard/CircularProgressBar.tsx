import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const radius = 30; // Outer radius
  const strokeWidth = 4; // Width of the progress stroke
  const normalizedRadius = radius - strokeWidth / 2; // Adjusted radius for centering the stroke
  const circumference = 2 * Math.PI * normalizedRadius; // Circumference based on adjusted radius
  const strokeDashoffset = circumference - (percentage ) * circumference; // Calculate offset

  return (
    <svg width={radius * 2} height={radius * 2}>
      {/* Background circle */}
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        stroke="#e0e0e0"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* Progress circle */}
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        stroke="#881C1B"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        fill="transparent"
        transform={`rotate(-90 ${radius} ${radius})`} // Rotate to start from top
        strokeLinecap="round"
      />
      {/* Percentage text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="1.5em"
      >
        {`${percentage*100}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;