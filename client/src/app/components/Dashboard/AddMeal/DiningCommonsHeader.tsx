import React, { useState } from 'react';

const DiningCommonsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (option:string) => {
    setSelection(option);
    setIsOpen(false); // Optionally close the dropdown upon selection
  };

  // Dummy components for demonstration
  const OptionOneContent = () => <p>You selected option one!</p>;
  const OptionTwoContent = () => <p>You selected option two!</p>;
  const OptionThreeContent = () => <p>You selected option three!</p>;

  return (
    <main className=" flex overflow-hidden flex-col items-center">
      <div className="overflow-hidden flex items-center justify-center px-16 py-10 w-full text-4xl font-medium text-center text-white bg-red-900 rounded-3xl">
        <span>DINING COMMONS</span>
        <img 
          onClick={toggleDropdown} 
          loading="lazy" 
          src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" 
          alt="Expand" 
          className="w-7 ml-4 aspect-square cursor-pointer" 
        />
      </div>
      {isOpen && (
        <section className="flex flex-col mt-6 w-full max-md:max-w-full bg-white rounded-xl shadow-md p-4">
          <button onClick={() => handleSelection('one')} className="p-2 hover:bg-gray-200">Option 1</button>
          <button onClick={() => handleSelection('two')} className="p-2 hover:bg-gray-200">Option 2</button>
          <button onClick={() => handleSelection('three')} className="p-2 hover:bg-gray-200">Option 3</button>
        </section>
      )}
      <div className="content mt-4">
        {selection === 'one' && <OptionOneContent />}
        {selection === 'two' && <OptionTwoContent />}
        {selection === 'three' && <OptionThreeContent />}
      </div>
    </main>
  );
};

export default DiningCommonsHeader;
