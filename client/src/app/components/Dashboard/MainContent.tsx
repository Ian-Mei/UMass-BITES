import React from 'react';
import ProfileCard from './ProfileCard';
import NutrientCards from './NutrientCards'; // Ensure this component is defined in a separate file
import MealCards from './MealCards';       // Ensure this component is defined in a separate file
import TodaysDetails from './TodaysDetails'; // Ensure this component is defined in a separate file
import WeeklyNutritionOverview from './WeeklyNutrition'; // Ensure this component is defined in a separate file

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-8 flex-col ml-[17%] mr-[22%] w-[61%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col pt-5 w-full min-h-[933px] max-md:mt-8 max-md:max-w-full max-sm:hidden">
        <ProfileCard
          name="No Name"
          weight={0}
          height={{ feet: 0, inches: 0 }}
          imageSrc="https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
        />
        <NutrientCards />
        <MealCards />
        <TodaysDetails />
        <WeeklyNutritionOverview />
      </div>
    </main>
  );
};

export default MainContent;
