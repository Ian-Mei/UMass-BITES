import React from 'react';
import FoodCard from './FoodCard';
import { FoodItem } from '../types';

interface FoodSectionProps {
  title: string;
  items: FoodItem[];
}

const FoodSection: React.FC<FoodSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap justify-between w-full max-md:max-w-full">
        <h2 className="flex-1 shrink text-base font-medium basis-0 text-neutral-800 max-md:max-w-full">
          {title}
        </h2>
        <div className="flex gap-3 items-center my-auto">
          <button className="flex gap-2.5 justify-center self-stretch p-1.5 my-auto w-6 border border-solid border-neutral-400 min-h-[24px] rounded-[50px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c00ca5ab2d32c1bf514c004bfa1d8a23071f07c9c4427d3f8ea126b1b55ae0b?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="" className="object-contain flex-1 shrink w-3 aspect-square basis-0" />
          </button>
          <button className="flex gap-2.5 justify-center self-stretch p-1.5 my-auto w-6 border border-solid border-neutral-400 min-h-[24px] rounded-[50px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e85f4efdab94be767e5f02f5ee176792120be01e86cfd853eee9aba904c3ae6f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="" className="object-contain flex-1 shrink w-3 aspect-square basis-0" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 items-center mt-5 w-full font-medium text-neutral-800 max-md:max-w-full">
        {items.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodSection;