import React from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src }) => {
  return (
    <div className="flex gap-2.5 items-center p-2.5">
      <Image src={src} alt="User profile" layout="intrinsic" width={200} height={200} className="object-fill self-stretch my-auto aspect-square rounded-full overflow-hidden" />
    </div>
  );
};

export default ProfileImage;
