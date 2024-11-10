"use client";
import React, { useState, useEffect } from 'react';
import VerticalProgressBar from './VerticalProgressBar';
import { User } from './types';

const WeekGraph: React.FC = () => {
  const [listitems, setListItems] = useState<JSX.Element[]>([]);
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    profilePicture: 'https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg',
    currentStreak: 0,
    maxStreak: 0,
    weight: 0,
    height: 0,
    goalCals: 2000,
    goalProtein: 400,
    allergies: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = 'mRupKZQfViePG8I6nppc';
        let response = await fetch(`http://localhost:3001/users/${userID}`);
        let result = await response.json();
        setUser(result as User);
        response = await fetch(`http://localhost:3001/dailies/${userID}`);
        result = await response.json();
        const newListItems = [1, 2, 3, 4, 5, 6, 7].map((num) => {
          return <VerticalProgressBar key={num} carbs={result.currentcarbs / (user.goalCals * 0.5) * 100} protein={result.currentprotein / user.goalProtein * 100} fat={result.currentfat / 65 * 100} />;
        });
        setListItems(newListItems);

        if (!response.ok) {
          throw new Error('Failed to update user info');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h2 className="self-stretch w-full text-base font-medium whitespace-nowrap text-neutral-800">
        WEEK
      </h2>
      <div className="flex gap-x-3 justify-center items-end self-center mt-9 max-w-full rounded-md border border-solid border-neutral-400 min-h-[116px] max-h-[300px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        {listitems}
      </div>
    </section>
  );
};

export default WeekGraph;