import React from 'react';
import FoodSection from './FoodSection';
import { FoodItem } from '../types';

const bowlItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Shoyu Ramen',
    calories: '###',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8'
  }
];

const wokItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Stir Fry with Noodles',
    calories: '###',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e6959013634181bd597801b17e1f3c3edc89ab4c3b1a16979aedf035845d8abe?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8'
  },
  {
    location: 'Worcester Commons',
    name: 'Stir Fry yum yum',
    calories: '###',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8'
  }
];

const grillItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Chicken Burger',
    calories: '###',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8'
  },
  {
    location: 'Worcester Commons',
    name: 'Hamburger',
    calories: '###',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8'
  },
  {
    location: 'Worcester Commons',
    name: 'Fries',
    calories: '###',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8'
  },
  {
    location: 'Worcester Commons',
    name: 'Sweet Fries',
    calories: '###',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c090be0af9e2c0872915d23bf5ae73b7804007db47d15e7cbe61286ecf1eed18?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8'
  }
];

const DiningCommons: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center max-w-[840px]">
      <header className="overflow-hidden px-16 py-10 w-full text-4xl font-medium text-center text-white bg-red-900 rounded-3xl max-md:px-5 max-md:max-w-full">
        DINING COMMONS
      </header>
      <section className="flex flex-col mt-6 w-full max-md:max-w-full">
        <FoodSection title="BOWL" items={bowlItems} />
        <FoodSection title="WOK" items={wokItems} />
        <FoodSection title="GRILL STATION" items={grillItems} />
      </section>
    </main>
  );
};

export default DiningCommons;