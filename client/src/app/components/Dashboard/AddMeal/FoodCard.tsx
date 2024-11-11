import React, { useState } from 'react';
import {Food} from '../types';


const wantToSelect = 'https://cdn-icons-png.flaticon.com/512/399/399271.png';
const selected = 'https://cdn1.vectorstock.com/i/1000x1000/42/00/check-mark-icon-in-red-vector-42404200.jpg';

const FoodCard: React.FC<Food> = (f: Food) => {
  const [imageSrc, setImageSrc] = useState(wantToSelect);
  const [isAdded, setIsAdded] = useState(false);
  const [resetPlus, setResetPlus] = useState(false); // Controls when the plus grows back

  const handleClick = () => {
    if(!isAdded) {
      setImageSrc(imageSrc === wantToSelect ? selected : wantToSelect);
      setResetPlus(false);
      setIsAdded(true);

        const updateInfo = async () => {
          try {
            const userID = "mRupKZQfViePG8I6nppc";
            let response = await fetch(`http://localhost:3001/dailies/${userID}`);
            const result = await response.json();
            console.log(response)   
            const updatedUserInfo = {
              currentcals: result.currentcals + f.calories,
              currentcarbs: result.currentcarbs + f.carbs.total,
              currentfat: result.currentfat + f.fat.total,
              currentprotein: result.currentprotein + f.protein
            };
            response = await fetch(`http://localhost:3001/dailies/edit/${userID}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedUserInfo),
            });
          }
          catch (error) {
            console.log(error);
            console.log("poips")
          }
        };
        updateInfo();

      // Schedule the reset after the check animation completes
      setTimeout(() => {
        setResetPlus(true);
        setIsAdded(false); 
        
      }, 2000); // Adjust timeout based on animation timing
    }
  };

  return (
    <article className="flex mr-5 items-center self-stretch p-3 my-auto bg-white rounded-3xl min-h-[100px] min-w-[250px]">
      <div className="flex flex-col justify-center self-stretch my-auto">
        <h3 className="mt-2.5 text-sm">{f.name}</h3>
        <div className="flex gap-2 items-center self-start mt-2.5 text-xs rounded-none min-h-[12px]">
          <div className="gap-1 self-stretch my-auto bg-white">
            Calories: {f.calories}
          </div>
          <div className="gap-1 self-stretch my-auto bg-white">
            Protein: {f.protein}
          </div>
        </div>
        <div className="flex gap-2 items-center self-start mt-2.5 text-xs rounded-none min-h-[12px]">
          <div className="gap-1 self-stretch my-auto bg-white">
            Carbs: {f.carbs.total}
          </div>
          <div className="gap-1 self-stretch my-auto bg-white">
            Fats: {f.fat.total}
          </div>
        </div>
      </div>
      <button
        onClick={handleClick}
        className={`flex items-center justify-center w-16 h-16 rounded-lg transition duration-200 focus:outline-none ml-auto ${isAdded ? 'added' : ''}`}
      >
        <svg className="w-fill" viewBox="0 0 14 14">
          <path
            className={`plus fill-red-900 ${isAdded ? 'animate-plus' : ''} ${resetPlus ? 'reset-plus' : ''}`}
            d="M6,2.6H8V6h3.4V8H8v3.4H6V8H2.6V6H6Z"
            style={{ transformOrigin: 'center' }}
          />

            <path
              className={`check stroke-green-900 ${isAdded ? 'animate-check' : ''}`}
              d="M12,3.5l-6.81,7L2,7.8"
              fill="none"
              style={{ strokeDasharray: 20, strokeDashoffset: 20 }}
            />

        </svg>
      </button>
    </article>
  );
};

export default FoodCard;
