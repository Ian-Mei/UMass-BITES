import React from 'react';
import NutritionCard from './DailyNutritionCard';
import { DayData, OverallData } from './types';

const weekDays: DayData[] = [
  { day: 'MONDAY', calories: 0, carbs: 0, fat: 0, protein: 0 },
  { day: 'TUESDAY', calories: 0, carbs: 0, fat: 0, protein: 0 },
  { day: 'WEDNESDAY', calories: 0, carbs: 0, fat: 0, protein: 0 },
  { day: 'THURSDAY', calories: 0, carbs: 0, fat: 0, protein: 0 },
  { day: 'FRIDAY', calories: 0, carbs: 0, fat: 0, protein: 0 },
  { day: 'SATURDAY', calories: 0, carbs: 0, fat: 0, protein: 0 },
  { day: 'SUNDAY', calories: 0, carbs: 0, fat: 0, protein: 0 },
];

const overallData: OverallData = {
  calories: 0,
  carbs: 0,
  fat: 0,
  protein: 0,
};

const WeeklyNutritionOverview: React.FC = () => {
  return (
    <main className="flex flex-col">
      <h1 className="flex-1 shrink w-full mt-6 text-base font-medium text-neutral-800 max-md:max-w-full">
        THIS WEEK
      </h1>
      <section className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 w-full max-md:max-w-full">
          {weekDays.slice(0, 3).map((day) => (
            <NutritionCard key={day.day} {...day} />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 w-full max-md:max-w-full">
          {weekDays.slice(3, 6).map((day) => (
            <NutritionCard key={day.day} {...day} />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 w-full max-md:max-w-full">
          <NutritionCard {...weekDays[6]} />
          <NutritionCard day="OVERALL" {...overallData} isOverall />
          <button className="flex-1 shrink p-3 text-3xl font-semibold text-center text-white bg-red-900 rounded-xl shadow-2xl min-w-[240px]">
            SEE ALL
          </button>
        </div>
      </section>
    </main>
  );
};

export default WeeklyNutritionOverview;