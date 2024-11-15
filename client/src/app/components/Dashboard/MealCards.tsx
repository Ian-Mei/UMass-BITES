"use client";

import React, { useState } from 'react';

interface MealCardProps {
  imageSrc: string;
  location: string;
  mealName: string;
  calories: number;
}

const MealCard: React.FC<MealCardProps> = ({ imageSrc, location, mealName, calories }) => (
  <div className="flex-shrink-0 w-[calc(25%-10px)] md:w-[23%] p-3 bg-white rounded-3xl shadow-2x2">
    <img loading="lazy" src={imageSrc} alt={mealName} className="object-contain rounded-xl w-full aspect-[1.53]" />
    <div className="px-3 py-1 mt-2.5 text-xs uppercase rounded-lg bg-pink-800 bg-opacity-30 text-pink-950">{location}</div>
    <div className="mt-2.5 text-sm">{mealName}</div>
    <div className="mt-2.5 text-xs">Calories: {calories}</div>
  </div>
);

const AddMealCard: React.FC = () => (
  <div className="flex-shrink-0 w-[calc(25%-10px)] md:w-[23%] p-8 text-sm text-center bg-white rounded-3xl shadow-2x2 flex flex-col items-center justify-center">
    <img
      loading="lazy"
      src="https://cdn-icons-png.flaticon.com/512/25/25304.png"
      alt="Add meal"
      className="object-contain w-20 rounded-xl mb-2.5"
    />
    <div className="mt-2.5">Add Meal</div>
  </div>
);

const MealCards: React.FC = () => {
  const meals = [
    { imageSrc: "https://umassdining.com/sites/default/files/worcester_commons_new.jpg", location: "Worcester Commons", mealName: "Shoyu Ramen", calories: 450 },
    { imageSrc: "https://umassdining.com/sites/default/files/worcester_commons_new.jpg", location: "Worcester Commons", mealName: "Chicken Teriyaki", calories: 400 },
    { imageSrc: "https://umassdining.com/sites/default/files/worcester_commons_new.jpg", location: "Worcester Commons", mealName: "Beef Stir Fry", calories: 550 },
    { imageSrc: "https://umassdining.com/sites/default/files/worcester_commons_new.jpg", location: "Worcester Commons", mealName: "Sushi Platter", calories: 300 },
    { imageSrc: "https://umassdining.com/sites/default/files/worcester_commons_new.jpg", location: "Worcester Commons", mealName: "Tempura Udon", calories: 480 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < meals.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="flex flex-col items-center mt-6 w-full">
      <div className="flex gap-3 mb-4">
        <button onClick={handlePrevious} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex === 0}>
          <img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="Previous" className="w-3 aspect-square" />
        </button>
        <button onClick={handleNext} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex >= meals.length - 3}>
          <img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="Next" className="w-3 aspect-square" />
        </button>
      </div>

      {/* Cards container to display three full cards and a partial fourth, taking full container width */}
      <div className="flex overflow-hidden w-full">
        <div className="flex gap-5 transform transition-transform" style={{ transform: `translateX(-${currentIndex * 210}px)` }}>
          {meals.map((meal, index) => (
            <MealCard key={index} {...meal} />
          ))}
          <AddMealCard />
        </div>
      </div>
    </section>
  );
};

export default MealCards;
