import React from 'react';
import FoodSection from './FoodSection';

const FoodMenu: React.FC = () => {
  const bowlFoods = [
    {
      location: "Worcester Commons",
      name: "Shoyu Ramen",
      calories: 500,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8"
    }
  ];

  const wokFoods = [
    {
      location: "Worcester Commons",
      name: "Stir Fry with Noodles",
      calories: 450,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6959013634181bd597801b17e1f3c3edc89ab4c3b1a16979aedf035845d8abe?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8"
    },
    {
      location: "Worcester Commons",
      name: "Stir Fry yum yum",
      calories: 400,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8"
    }
  ];

  const grillFoods = [
    {
      location: "Worcester Commons",
      name: "Chicken Burger",
      calories: 550,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8"
    },
    {
      location: "Worcester Commons",
      name: "Hamburger",
      calories: 600,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8"
    },
    {
      location: "Worcester Commons",
      name: "Fries",
      calories: 300,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3c565ae803e7be2eaddf7b171fc08407dbc4de40b86933600701d5ef2bf9d1f?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8"
    },
    {
      location: "Worcester Commons",
      name: "Sweet Fries",
      calories: 350,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c090be0af9e2c0872915d23bf5ae73b7804007db47d15e7cbe61286ecf1eed18?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8"
    }
  ];

  return (
    <main className="flex flex-col max-w-[840px]">
      <FoodSection title="BOWL" foods={bowlFoods} />
      <FoodSection title="WOK" foods={wokFoods} />
      <FoodSection title="GRILL STATION" foods={grillFoods} />
    </main>
  );
};

export default FoodMenu;