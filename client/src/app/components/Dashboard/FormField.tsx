import React, { ChangeEvent } from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, id, placeholder, type = "text", onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={onChange}  // Ensures the onChange event handler is attached to the input
      />
    </div>
  );
};

export default FormField;