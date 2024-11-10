import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';

interface ProfileCardProps {
  name: string;
  weight: number;
  height: { feet: number; inches: number };
  imageSrc: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, weight, height, imageSrc }) => {
  if (!height || height.feet === undefined || height.inches === undefined) {
    console.error('Invalid or missing height object');
    return null;
  }

  return (
    <section className="overflow-hidden px-20 py-5 bg-red-900 rounded-3xl">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
          <ProfileImage src={imageSrc} />
        </div>
        <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
          <UserInfo name={name} weight={weight} height={height} />
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
