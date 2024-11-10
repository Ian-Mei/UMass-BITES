import React from 'react';

interface MealRecommendationProps {
  mealName: string;
  location: string;
  imageSrc: string;
}

const MealRecommendation: React.FC<MealRecommendationProps> = ({ mealName, location, imageSrc }) => (
  <div className="flex flex-col mt-4">
    <div className="flex gap-2 justify-center items-center w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-4">
        <div className="text-xs font-medium text-neutral-800">{mealName}</div>
        <div className="mt-1 text-xs text-zinc-600">{location}</div>
      </div>
      <button className="gap-2.5 self-stretch px-2 py-1 my-auto text-xs font-medium text-center text-white whitespace-nowrap bg-red-900 rounded-lg">
        Add
      </button>
    </div>
    <img loading="lazy" src={imageSrc} alt={mealName} className="object-contain mt-4 w-full" />
  </div>
);


const SuggestedMeals: React.FC = () => {
  const meals = [
    { mealName: "Chicken Tikki Masala", location: "Worcester Dining Commons", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" },
    { mealName: "Chicken Tikki Masala", location: "Worcester Dining Commons", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" },
    { mealName: "Chicken Tikki Masala", location: "Worcester Dining Commons", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" },
    { mealName: "Chicken Tikki Masala", location: "Worcester Dining Commons", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a641fdfca04966da0db10918f0c6c01a470498f3b4c6803910caa73ba3a5091a?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" },
  ];

  return (
    <section className="mt-9">
      <h2 className="self-stretch w-full text-base font-medium text-neutral-800">
        SUGGESTED MEALS
      </h2>
        <div className="flex flex-col justify-left py-4 w-full bg-white rounded-3xl">
          {meals.map((meal, index) => (
            <MealRecommendation key={index} {...meal} />
          ))}
        </div>
    </section>
  );
};

export default SuggestedMeals;