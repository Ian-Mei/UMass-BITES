"use client";

import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import NutrientCards from './NutrientCards'; // Ensure this component is defined in a separate file
import MealCards from './MealCards';       // Ensure this component is defined in a separate file
import TodaysDetails from './TodaysDetails'; // Ensure this component is defined in a separate file
import WeeklyNutritionOverview from './WeeklyNutrition'; // Ensure this component is defined in a separate file

const MainContent: React.FC = () => {
  interface User {
    firstName: string;
    lastName: string;
    profilePicture: string;
    currentStreak: number;
    maxStreak: number;
    weight: number;
    height: number;
  }

  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);
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
      finally {
        setUserLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex-1 p-8 flex-col ml-[17%] mr-[22%] w-[61%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col pt-5 w-full min-h-[933px] max-md:mt-8 max-md:max-w-full max-sm:hidden">
        <ProfileCard
          name={userLoading ? "No Name" : (user as User).firstName + (user as User).lastName}
          weight={userLoading ? 0 : (user as User).weight}
          height={userLoading ? { feet: 0, inches: 0 } : { feet: Math.floor((user as User).height / 12), inches: (user as User).height % 12 }}
          imageSrc={userLoading ? "https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg" : (user as User).profilePicture}
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
