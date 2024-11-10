"use client"

import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { FoodItem } from '../types';

interface FoodSectionProps {
  title: string;
  items: FoodItem[];
}


const FoodSection: React.FC<FoodSectionProps> = ({ title, items }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3.5;
  const cardWidth = 210; // Width in pixels of each card

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, items.length - visibleItems));
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  return (
    <section className="flex flex-col justify-end items-center mt-6 w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="flex gap-3 mb-4">
        <button onClick={handlePrevious} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex === 0}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/276d3f106a24b9467c68d5827a4ca135f10d3a84a1a66251d7bd1df4f182fc20?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Previous" className="w-3 aspect-square" />
        </button>
        <button onClick={handleNext} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex >= items.length - 3}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eb261754e03688687c6770b68137cf57f14891f90f0642df4edef7e4ee0b46f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Next" className="w-3 aspect-square" />
        </button>
      </div>
      <div className="flex overflow-hidden w-full">
        <div className="flex transform transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}>
          {items.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
