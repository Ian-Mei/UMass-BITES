import React from 'react';
import WeekGraph from './WeekGraph';
import SuggestedMeals from './SuggestedMeals';
import { Link } from 'react-router-dom';


const RightSidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 right-0 flex flex-col w-[22%] h-screen p-8 bg-white shadow-xl z-20">
      <div className="flex flex-col pt-8 mx-auto w-full min-h-full pr-2\">
        <WeekGraph />
        <SuggestedMeals />
      </div>
    </aside>
  );
};

export default RightSidebar;