import React from 'react';

interface ProfileImageProps {
  src: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src }) => {
  return (
    <div className="flex gap-2.5 items-center p-2.5">
      <div className="flex justify-center items-center w-full h-[200px]">
        <img loading="lazy" src={src} alt="User profile" className="object-contain self-stretch my-auto aspect-square w-[200px]" />
      </div>
    </div>
  );
};

export default ProfileImage;
