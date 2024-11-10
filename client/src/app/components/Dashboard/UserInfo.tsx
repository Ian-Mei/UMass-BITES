import React from 'react';

interface UserInfoProps {
  name: string;
  weight: number;
  height: { feet: number; inches: number };
}

const UserInfo: React.FC<UserInfoProps> = ({ name, weight, height }) => {
  return (
    <div className="flex flex-col items-start self-stretch my-auto text-xs text-white max-md:mt-10">
      <h2 className="uppercase">Welcome King</h2>
      <h1 className="self-stretch mt-9 text-2xl font-semibold max-md:text-left">
        {name}
      </h1>
      <p className="mt-5 uppercase">
        weight: {weight} lbs<br />
        height: {height.feet} ft {height.inches} in
      </p>
    </div>
  );
};

export default UserInfo;
