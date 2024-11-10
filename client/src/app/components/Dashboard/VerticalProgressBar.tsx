import React from 'react';

interface VerticalProgressBarProps {
  carbs: number;
  protein: number;
  fat: number;
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({ carbs,protein,fat }) => {
  const scale = 2.58;
  if (carbs > 100) carbs = 100;
  if (protein > 100) protein = 100;
  if (fat > 100) fat = 100;
  return (
    <div className="flex flex-col items-center h-full w-7 overflow-hidden mx-px shadow-[0px_4px_4px_rgba(0,0,0,0)]">
      <div
        className="bg-green-500 rounded-t-md w-full max-h-[300px]"
        style={{ height: fat/scale }}
        />
        <div
          className="bg-yellow-500 w-full max-h-[300px]"
          style={{ height: protein/scale }}
          />
        <div
          className="bg-red-500 w-full max-h-[300px]"
          style={{ height: carbs/scale}}
          />
    </div>
  );
};

export default VerticalProgressBar;