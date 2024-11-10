import React from 'react';
import { useState, useEffect } from 'react';
import { User } from './types';
interface NutrientRowProps {
  name: string;
  type: string;
  percentage: number;
}

const NutrientRow: React.FC<NutrientRowProps> = ({ name, type, percentage }) => (
  <div className="flex flex-wrap gap-10 items-center mt-6 w-full max-md:max-w-full max-sm:hidden">
    {/* Nutrient name display */}
    <div className="flex-1 shrink self-stretch gap-2 my-auto w-full min-w-[240px]">
      {name} {/* Nutrient name text */}
    </div>
    
    {/* Nutrient type display (e.g., "CARBS", "PROTEIN") */}
    <div className="w-[80px] py-0.5 my-auto text-xs uppercase text-center whitespace-nowrap rounded-lg bg-pink-800 bg-opacity-30 min-h-[15px] text-pink-950">
      {type} {/* Nutrient type text */}
    </div>

    {/* Progress bar container for the nutrient percentage */}
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] rounded-[50px] w-[253px]">
      <div className="flex flex-col items-start bg-zinc-300 rounded-[50px] max-md:pr-5">
         {/* Progress bar filled to represent the percentage */}
        <div className="flex shrink h-1.5 bg-red-900 rounded-[50px]" style={{ width: `${percentage}%` }} />
      </div>
    </div>
    {/* Percentage display (e.g., "40%") */}
    <div className="gap-2.5 self-stretch w-[50px] text-center py-0.5 my-auto text-xs uppercase whitespace-nowrap rounded-lg bg-pink-800 bg-opacity-30 min-h-[15px] text-pink-950">
      {percentage}%
    </div>
  </div>
);


const TodaysDetails: React.FC = () => {
  let nutrients = [
    { name: "Fiber", type: "CARBS", percentage: 10 },
    { name: "Protein", type: "PROTEIN", percentage: 40 },
    { name: "Fat", type: "FAT", percentage: 100 },
  ];
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    profilePicture: 'https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg',
    currentStreak: 0,
    maxStreak: 0,
    weight: 0,
    height: 0,
    goalCals: 2000,
    goalProtein: 400,
    allergies: [],
  });

  const [userInfo, setUserInfo] = useState({
    currentcals: 0,
    currentprotein: 0,
    currentcarbs: 0,
    currentfat: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = 'mRupKZQfViePG8I6nppc'
        let response = await fetch(`http://localhost:3001/users/${userID}`);
        let result = await response.json();
        setUser(result as User);
        response = await fetch(`http://localhost:3001/dailies/${userID}`);
        result = await response.json();
        nutrients = [
          { name: "Fiber", type: "CARBS", percentage: result.currentcarbs / user.goalCals * 100 },
          { name: "Protein", type: "PROTEIN", percentage: result.currentprotein / user.goalProtein * 100 },
          { name: "Fat", type: "FAT", percentage: result.currentfat / 65 * 100 }
        ];
        console.log(nutrients);
        setUserInfo(result);

        // const updatedUserInfo = {
        //   currentcals: 0,
        //   currentcarbs: 0,
        //   currentfat: 0,
        //   currentprotein: 0,
        // };
        // response = await fetch(`http://localhost:3001/dailies/edit/${userID}`, {
        //   method: 'PUT',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(updatedUserInfo),
        // });
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to update user info');
        }
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="flex flex-col flex-1 mt-6 w-full max-md:max-w-full max-sm:hidden">
      <h2 className="flex-1 shrink text-base mb-3 font-medium basis-0 text-neutral-800">
        TODAY&apos;S DETAILS
      </h2>
      <div className="flex flex-col px-6 py-5 w-full bg-white rounded-xl shadow-2xl">
        <div className="self-stretch my-auto w-[275px]">NUTRIENTS</div>
        {nutrients.map((nutrient, index) => (
          <NutrientRow key={index} {...nutrient} />
        ))}
      </div>
    </section>
  );
};

export default TodaysDetails;