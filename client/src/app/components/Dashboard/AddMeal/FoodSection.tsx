import React, { useState, useEffect, useRef } from 'react';
import FoodCard from './FoodCard';
import { Food } from '../types';

interface FoodSectionProps {
  title: string;
  items: Food[];
}

const FoodSection: React.FC<FoodSectionProps> = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      // Adjust currentIndex to ensure it's not out of bounds after resizing
      const maxIndex = items.length - calculateVisibleItems();
      setCurrentIndex(current => Math.min(current, maxIndex));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [items.length]); // Dependency on items.length ensures recalculation when items array changes

  const calculateVisibleItems = () => {
    // This could be more dynamic depending on actual card widths or container width
    const width = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;
    if (width < 480) return 1; // Example responsive adjustment
    if (width < 768) return 2;
    return 3; // Adjust based on your design requirements
  };

  const cardWidth = () => {
    // Determine card width based on the current number of visible items
    return containerRef.current ? containerRef.current.clientWidth / calculateVisibleItems() : 0;
  };

  const handleNext = () => {
    const visibleItems = calculateVisibleItems();
    const maxIndex = items.length - visibleItems;
    setCurrentIndex(current => Math.min(current + 1, maxIndex));
  };

  const handlePrevious = () => {
    setCurrentIndex(current => Math.max(current - 1, 0));
  };

  return (
    <section className="flex flex-col items-center mt-6 w-full">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex gap-3 mb-4">
      <button onClick={handlePrevious} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex === 0}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/276d3f106a24b9467c68d5827a4ca135f10d3a84a1a66251d7bd1df4f182fc20?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Previous" className="w-3 aspect-square" />
        </button>
        <button onClick={handleNext} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex >= items.length - 3}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eb261754e03688687c6770b68137cf57f14891f90f0642df4edef7e4ee0b46f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Next" className="w-3 aspect-square" />
        </button>
      </div>
      {/* <button onClick={handlePrevious} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex === 0}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/276d3f106a24b9467c68d5827a4ca135f10d3a84a1a66251d7bd1df4f182fc20?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Previous" className="w-3 aspect-square" />
        </button>
        <button onClick={handleNext} className="p-1.5 w-6 border border-neutral-400 rounded-full" disabled={currentIndex >= meals.length - 3}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eb261754e03688687c6770b68137cf57f14891f90f0642df4edef7e4ee0b46f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Next" className="w-3 aspect-square" />
        </button> */}
      <div className="flex overflow-hidden w-full" ref={containerRef}>
        <div className="flex transform transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * cardWidth()}px)` }}>
          {items.map((food, index) => (
            <FoodCard key={index} {...food} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
