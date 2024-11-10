import React from 'react';
import CircularProgressBar from './CircularProgressBar';

import { User } from './types';


interface NutrientCardProps {
  nutrientName: string;
  percentage: number;
  total: number;
}
interface NutrientsProps {
  carbPercent: number;
  proteinPercent: number;
  fatPercent: number;
  caloriePercent: number;
  carbTots: number;
  proteinTots: number;
  fatTots: number;
  calorieTots: number;
}

const NutrientCard: React.FC<NutrientCardProps> = ({ nutrientName, percentage, total }) => (
  <div className="flex flex-col flex-1 shrink justify-center items-center self-stretch px-3 py-3.5 my-auto bg-white rounded-xl shadow-2xl basis-0">
    <CircularProgressBar percentage={percentage} />
    <div className="mt-4">{nutrientName}</div>
    <div>Total Today: {total} g</div>
  </div>
);


const NutrientCards: React.FC<NutrientsProps> = ({ carbPercent, carbTots, proteinPercent, proteinTots, fatPercent,fatTots, caloriePercent,calorieTots }) => {
  const nutrients = [
    { nutrientName: "Carbs", percentage: carbPercent, total:  carbTots},
    { nutrientName: "Protein", percentage: proteinPercent, total: proteinTots},
    { nutrientName: "Fat", percentage: fatPercent, total: fatTots},
    { nutrientName: "Calories", percentage: caloriePercent, total: calorieTots},
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