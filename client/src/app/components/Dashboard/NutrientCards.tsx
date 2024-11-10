import React from 'react';
import CircularProgressBar from './CircularProgressBar';

interface NutrientCardProps {
  nutrientName: string;
  percentage: number;
}

const NutrientCard: React.FC<NutrientCardProps> = ({ nutrientName, percentage }) => (
  <div className="flex flex-col flex-1 shrink justify-center items-center self-stretch px-3 py-3.5 my-auto bg-white rounded-xl shadow-2xl basis-0">
    <CircularProgressBar percentage={percentage} />
    <div className="mt-4">{nutrientName}</div>
  </div>
);


const NutrientCards: React.FC = () => {
  const nutrients = [
    { altText: "Carbs icon", nutrientName: "Carbs", percentage: 45 },
    { altText: "Protein icon", nutrientName: "Protein", percentage: 25 },
    { altText: "Fat icon", nutrientName: "Fat", percentage: 50},
  ];

  return (
    <div className="flex flex-wrap gap-3.5 justify-center items-center mt-6 w-full text-xs font-semibold whitespace-nowrap h-[110px] text-neutral-800 max-md:max-w-full max-sm:hidden">
      {nutrients.map((nutrient, index) => (
        <NutrientCard key={index} {...nutrient} />
      ))}
    </div>
  );
};

export default NutrientCards;