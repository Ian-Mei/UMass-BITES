import React from 'react';

interface MealRecommendationProps {
  mealName: string;
  location: string;
}

const MealRecommendation: React.FC<MealRecommendationProps> = ({ mealName, location }) => (
  <div className="flex gap-2 justify-center mt-4 items-center w-full">
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-4">
      <div className="text-xs font-medium text-neutral-800">{mealName}</div>
      <div className="mt-1 text-xs text-zinc-600">{location}</div>
    </div>
    <button className="gap-2.5 self-stretch px-2 py-1 my-auto text-xs font-medium text-center text-white whitespace-nowrap bg-red-900 rounded-lg">
      Add
    </button>
  </div>
);


const SuggestedMeals: React.FC = () => {
  const meals = [
    { mealName: "Chicken Tikki Masala", location: "Worcester Dining Commons"},
    { mealName: "Chicken Tikki Masala", location: "Worcester Dining Commons"},
    { mealName: "Chicken Tikki Masala", location: "Worcester Dining Commons"},
    { mealName: "Chicken Tikki Masala", location: "Worcester Dining Commons"},
  ];

  return (
    <section className="mt-9">
      <h2 className="self-stretch w-full text-base font-large text-neutral-800">
        SUGGESTED MEALS
      </h2>
        <div className="flex flex-col justify-left font-large py-4 w-full bg-white rounded-3xl">
          {meals.map((meal, index) => (
            <MealRecommendation key={index} {...meal} />
          ))}
        </div>
    </section>
  );
};

export default SuggestedMeals;