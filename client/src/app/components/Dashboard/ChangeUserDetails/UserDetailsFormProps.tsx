import React from 'react';
import InputField from './InputField';
import Button from './Button';

interface UserDetailsFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col rounded-none max-w-[700px]">
      <header className="flex flex-col w-full text-xl text-zinc-500 max-md:max-w-full">
        <h1 className="flex-1 shrink w-full text-base font-medium text-neutral-800 max-md:max-w-full">
          YOUR DETAILS
        </h1>
        <InputField label="FIRST NAME" name="firstName" />
        <InputField label="LAST NAME" name="lastName" />
        <InputField label="WEIGHT (lbs)" name="weight" type="number" />
        <div className="flex flex-wrap gap-5 justify-center mt-5 w-full leading-none max-md:max-w-full">
          <InputField label="HEIGHT (ft)" name="heightFeet" type="number" className="flex-1" />
          <InputField label="HEIGHT (in)" name="heightInches" type="number" className="flex-1" />
        </div>
        <div className="flex flex-wrap gap-5 justify-center mt-5 w-full leading-none max-md:max-w-full">
          <InputField label="Goal Calories" name="goalCalories" type="number" className="w-1/4" />
          <InputField label="Goal Carbs" name="goalCarbs" type="number" className="w-1/4" />
          <InputField label="Goal Fats" name="goalFats" type="number" className="w-1/4" />
          <InputField label="Goal Protein" name="goalProtein" type="number" className="w-1/4" />
        </div>
      </header>
      <Button type="submit" label="CHANGE" />
    </form>
  );
};

export default UserDetailsForm;