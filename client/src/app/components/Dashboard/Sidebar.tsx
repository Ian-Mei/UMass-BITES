import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const Sidebar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-[17%] flex flex-col justify-between h-screen p-8 bg-white shadow-xl overflow-y-hidden z-10">
        <div className="flex flex-col max-w-full font-medium whitespace-nowrap w-[146px] max-md:mt-10 self-start">
          <h2 className="flex-1 shrink gap-2.5 self-stretch py-2 w-full font-semibold uppercase text-neutral-700">
            OVERVIEW
          </h2>
          <ul className="flex flex-col justify-center mt-2.5 w-full font-large text-neutral-800">
            <Link href="/" className="flex gap-3 py-2 w-full text-red-500 whitespace-nowrap rounded-[40px]">
              Dashboard
            </Link>
            {/* <Link href="/components/Dashboard/adf" className="flex gap-3 py-2 mt-2 w-full rounded-[40px]">
              Food Log
            </Link> */}
            <Link href="/components/Dashboard/AddMeal" className="flex gap-3 py-2 mt-2 w-full rounded-[40px]">
              Meals
            </Link>
          </ul>
        </div>
        <div className="flex flex-col max-w-full font-large whitespace-nowrap w-[146px] ">
          <Link href="/logout" className="flex gap-3 items-center py-2 mt-2.5  text-red-500 rounded-[40px]">
            Logout
          </Link>
        </div>
    </nav>
  );
};

export default Sidebar;
