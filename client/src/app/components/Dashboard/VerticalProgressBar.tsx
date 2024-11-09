import React from 'react';

interface VerticalProgressBarProps {
  carbs: number;
  protein: number;
  fat: number;
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({ carbs,protein,fat }) => {
  const scale = 2.58;
  return (
    <div className="flex flex-col items-centerh-full w-7 overflow-hidden mx-px shadow-[0px_4px_4px_rgba(0,0,0,0)]">
      {/* This inner div fills according to the percentage and creates a vertical bar effect */}
      <div
        className="bg-green-500 rounded-t-md w-full"
        style={{ height: fat/scale }}
        />
        <div
          className="bg-yellow-500 w-full"
          style={{ height: protein/scale }}
          />
        <div
          className="bg-red-500 w-full"
          style={{ height: carbs/scale}}
          />
        </div>

  );
};

export default VerticalProgressBar;