import React, { useState } from 'react';
import { FoodItem } from '../types';

const wantToSelect = 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8';
const selected = 'https://cdn.builder.io/api/v1/image/assets/TEMP/e6959013634181bd597801b17e1f3c3edc89ab4c3b1a16979aedf035845d8abe?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8';

const FoodCard: React.FC<FoodItem> = ({ location, name, calories }) => {
  const [imageSrc, setImageSrc] = useState(wantToSelect);

  const toggleImage = () => {
    setImageSrc(currentSrc => currentSrc === wantToSelect ? selected : wantToSelect);
  };

  return (
    <article className="flex mr-5 items-center self-stretch p-3 my-auto bg-white rounded-3xl min-h-[100px] min-w-[250px]">
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
      <img 
        loading="lazy" 
        src={imageSrc} 
        alt={name} 
        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square cursor-pointer" 
        onClick={toggleImage}
      />
    </article>
  );
};

export default FoodCard;
