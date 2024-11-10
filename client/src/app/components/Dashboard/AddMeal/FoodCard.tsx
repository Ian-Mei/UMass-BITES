import React from 'react';
import { FoodItem } from '../types';

const FoodCard: React.FC<FoodItem> = ({ location, name, calories, imageSrc }) => {
  return (
    <article className="flex gap-2.5 items-center self-stretch p-3 my-auto bg-white rounded-3xl shadow-2xl min-h-[88px]">
      <div className="flex flex-col justify-center self-stretch my-auto">
        <div className="gap-2.5 self-stretch px-3 py-1 text-xs uppercase rounded-lg bg-pink-800 bg-opacity-30 min-h-[15px] text-pink-950">
          {location}
        </div>
        <h3 className="mt-2.5 text-sm">{name}</h3>
        <div className="flex gap-2 items-center self-start mt-2.5 text-xs rounded-none min-h-[12px]">
          <div className="gap-1 self-stretch my-auto bg-white">
            Calories: {calories}
          </div>
        </div>
      </div>
      <img loading="lazy" src={imageSrc} alt={name} className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square" />
    </article>
  );
};

export default FoodCard;