"use client";

import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import NutrientCards from './NutrientCards'; // Ensure this component is defined in a separate file
import MealCards from './MealCards';       // Ensure this component is defined in a separate file
import TodaysDetails from './TodaysDetails'; // Ensure this component is defined in a separate file
import WeeklyNutritionOverview from './WeeklyNutrition'; // Ensure this component is defined in a separate file

import { User } from './types';

const MainContent: React.FC = () => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    profilePicture: 'https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg',
    currentStreak: 0,
    maxStreak: 0,
    weight: 0,
    height: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/users/mRupKZQfViePG8I6nppc');
        const result = await response.json();
        setUser(result as User);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex-1 p-8 flex-col ml-[17%] mr-[22%] w-[61%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col pt-5 w-full min-h-[933px] max-md:mt-8 max-md:max-w-full max-sm:hidden">
        <ProfileCard
          name={`${user.firstName} ${user.lastName}`}
          weight={user.weight}
          height={{ feet: Math.floor(user.height / 12), inches: user.height % 12 }}
          imageSrc={user.profilePicture}
        />
        <NutrientCards carbPercent={0.5} proteinPercent={0.2} fatPercent={0.1}/>
        <MealCards />
        <TodaysDetails />
        <WeeklyNutritionOverview />
      </div>
    </main>
  );
};

export default MainContent;
