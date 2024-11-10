import React from 'react';
import CircularProgressBar from './CircularProgressBar';

interface NutrientCardProps {
  nutrientName: string;
  percentage: number;
}
interface NutrientsProps {
  carbPercent: number;
  proteinPercent: number;
  fatPercent: number;
}

const NutrientCard: React.FC<NutrientCardProps> = ({ nutrientName, percentage }) => (
  <div className="flex flex-col flex-1 shrink justify-center items-center self-stretch px-3 py-3.5 my-auto bg-white rounded-xl shadow-2xl basis-0">
    <CircularProgressBar percentage={percentage} />
    <div className="mt-4">{nutrientName}</div>
  </div>
);


const NutrientCards: React.FC<NutrientsProps> = ({ carbPercent, proteinPercent, fatPercent }) => {
  const nutrients = [
    { altText: "Carbs icon", nutrientName: "Carbs", percentage: carbPercent },
    { altText: "Protein icon", nutrientName: "Protein", percentage: proteinPercent },
    { altText: "Fat icon", nutrientName: "Fat", percentage: fatPercent},
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