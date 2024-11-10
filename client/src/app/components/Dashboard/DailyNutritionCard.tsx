import React from 'react';
import { DayData, OverallData } from './types';

interface NutritionCardProps extends DayData, OverallData {
  isOverall?: boolean;
}

const NutritionCard: React.FC<NutritionCardProps> = ({
  day,
  calories,
  carbs,
  fat,
  protein,
  isOverall = false,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink justify-center items-center p-3 bg-white rounded-xl shadow-2xl basis-0 min-w-[240px]">
      <header
        className={`gap-2.5 self-stretch px-3 py-1 text-xs uppercase whitespace-nowrap rounded-lg ${
          isOverall
            ? 'bg-pink-950 text-white'
            : 'bg-pink-800 bg-opacity-30 text-pink-950'
        } min-h-[15px]`}
      >
        {day}
      </header>
      <div className="flex flex-col mt-4 text-xs font-semibold text-neutral-800 w-[70px]">
        <p>Calories: {calories}</p>
        <p className="mt-2">Carbs: {carbs}</p>
        <p className="mt-2">Fat: {fat}</p>
        <p className="mt-2">Protein: {protein}</p>
      </div>
    </article>
  );
};

export default NutritionCard;