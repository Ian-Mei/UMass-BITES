import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  label: string;
}

const Button: React.FC<ButtonProps> = ({ type, label }) => {
  return (
    <button
      type={type}
      className="gap-3 self-center px-3 py-2 mt-6 max-w-full text-xs font-medium text-center text-white whitespace-nowrap bg-red-900 rounded-[40px] w-[226px]"
    >
      {label}
    </button>
  );
};

export default Button;