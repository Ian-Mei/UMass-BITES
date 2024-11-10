import React from 'react';

interface ControlButtonProps {
  imageSrc: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ imageSrc }) => {
  return (
    <button className="flex gap-2.5 justify-center self-stretch p-1.5 my-auto w-6 border border-solid border-neutral-400 min-h-[24px] rounded-[50px]">
      <img loading="lazy" src={imageSrc} alt="" className="object-contain flex-1 shrink w-3 aspect-square basis-0" />
    </button>
  );
};

export default ControlButton;