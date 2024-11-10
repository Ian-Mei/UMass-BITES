import React from 'react';

interface UserInfoProps {
  name: string;
  weight: number;
  height: { feet: number; inches: number };
  allergies: string[];
}

const UserInfo: React.FC<UserInfoProps> = ({ name, weight, height, allergies }) => {
  return (
    <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10">
      <h2 className="uppercase">Welcome King</h2>
      <h1 className="self-stretch mt-3 mb-5 text-2xl font-bold ">
        {name}
      </h1>
      <p className="uppercase">
        weight: {weight} lbs<br />
        height: {height.feet} ft {height.inches} in
      </p>

      <h2 className="uppercase">Allergies:</h2>
      <div className="flex flex-wrap gap-2">
        {allergies.map((allergy, index) => (
          <span key={index} className="bg-gray-400 text-black rounded px-2 py-1">{allergy}</span>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
