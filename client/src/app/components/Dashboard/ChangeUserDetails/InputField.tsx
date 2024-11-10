import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', className = '' }) => {
  return (
    <div className={`flex-1 shrink mt-5 w-full ${className}`}>
      <label htmlFor={name} className="sr-only">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        className="gap-2.5 self-stretch px-7 py-5 w-full leading-none bg-white rounded-lg border border-solid border-zinc-500 max-md:px-5 max-md:max-w-full"
        aria-label={label}
      />
    </div>
  );
};

export default InputField;