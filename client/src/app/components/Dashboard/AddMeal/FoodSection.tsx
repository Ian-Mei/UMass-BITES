import React from 'react';
import FoodCard from './FoodCard';
import ControlButton from './ControlButton';

interface FoodSectionProps {
  title: string;
  foods: Array<{
    location: string;
    name: string;
    calories: number;
    imageSrc: string;
  }>;
}

const FoodSection: React.FC<FoodSectionProps> = ({ title, foods }) => {
  return (
    <section className="flex flex-col mt-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap justify-between w-full max-md:max-w-full">
        <h2 className="flex-1 shrink text-base font-medium basis-0 text-neutral-800 max-md:max-w-full">
          {title}
        </h2>
        <div className="flex gap-3 items-center my-auto">
          <ControlButton imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cd74993e643011adb38b447dae38f8544b8ac95c4bbc44ab2d981405c17a1253?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" />
          <ControlButton imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d6841e0210920b1d071b04038f48258fdc1f4908f8f23a17f825ff6dc4150364?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 items-center mt-5 w-full font-medium text-neutral-800 max-md:max-w-full">
        {foods.map((food, index) => (
          <FoodCard
            key={index}
            location={food.location}
            name={food.name}
            calories={food.calories}
            imageSrc={food.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodSection;