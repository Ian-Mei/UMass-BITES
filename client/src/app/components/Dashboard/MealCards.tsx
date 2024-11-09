"use client"

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
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a477ecb4133eb593bab2f1a3e213a2a37ccaa1f51bffb0a512009382043620f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8"
      alt="Add meal"
      className="object-contain w-20 rounded-xl mb-2.5"
    />
    <div className="mt-2.5">Add Meal</div>
  </div>
);

const MealCards: React.FC = () => {
  const meals = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/20d36bff7160213033220e960dab72fcc3d1b1c8fd48ae8bf86e343a98e88456?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8", location: "Worcester Commons", mealName: "Shoyu Ramen", calories: 450 },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0ad73c4e729049df6fadcd642eba4906d13c2f32cbba1d1db5f05d9473dc49b?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8", location: "Worcester Commons", mealName: "Chicken Teriyaki", calories: 400 },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/20d36bff7160213033220e960dab72fcc3d1b1c8fd48ae8bf86e343a98e88456?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8", location: "Worcester Commons", mealName: "Beef Stir Fry", calories: 550 },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0ad73c4e729049df6fadcd642eba4906d13c2f32cbba1d1db5f05d9473dc49b?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8", location: "Worcester Commons", mealName: "Sushi Platter", calories: 300 },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/20d36bff7160213033220e960dab72fcc3d1b1c8fd48ae8bf86e343a98e88456?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8", location: "Worcester Commons", mealName: "Tempura Udon", calories: 480 },
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
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/276d3f106a24b9467c68d5827a4ca135f10d3a84a1a66251d7bd1df4f182fc20?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Previous" className="w-3 aspect-square" />
        </button>
        <button onClick={handleNext} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex >= meals.length - 3}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eb261754e03688687c6770b68137cf57f14891f90f0642df4edef7e4ee0b46f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Next" className="w-3 aspect-square" />
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
