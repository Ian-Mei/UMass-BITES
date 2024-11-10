import React from 'react';

const EditButton: React.FC = () => {
  return (
    <button 
      className="overflow-hidden z-10 gap-2 self-center p-3 mt-40 leading-none whitespace-nowrap bg-red-700 rounded-lg border border-red-800 border-solid font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-danger-on-danger)] text-[length:var(--sds-typography-body-size-medium)] max-md:mt-10"
    >
      Edit
    </button>
  );
};

export default EditButton;