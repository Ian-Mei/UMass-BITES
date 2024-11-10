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
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70d9f711a85efdc446cb6fa52770d98d94d17a87b2ec47e20c3b5aa74115eb01?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Dashboard Icon" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
              Dashboard
            </Link>
            {/* <Link href="/components/Dashboard/adf" className="flex gap-3 py-2 mt-2 w-full rounded-[40px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf6911b5ca0e2d848eb3b69275e27a356d2c4ee83f135382b151e42f108dbc8?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Food Log Icon" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
              Food Log
            </Link> */}
            <Link href="/components/Dashboard/AddMeal" className="flex gap-3 py-2 mt-2 w-full rounded-[40px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e28313e33f46ac39b6e314674ebc3f164bb1233abad41fd87d09d301b0ceb08?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Meals Icon" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
              Meals
            </Link>
          </ul>
        </div>
        <div className="flex flex-col max-w-full font-large whitespace-nowrap w-[146px] ">
          <Link href="/logout" className="flex gap-3 items-center py-2 mt-2.5  text-red-500 rounded-[40px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/76778048cbfc17db5ebd509a8f8d8300efbea99bc23886f51e2b0bf39d43c128?placeholderIfAbsent=true&apiKey=3c3e08ceeec64dce8693bb87026868e8" alt="Logout Icon" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
            Logout
          </Link>
        </div>
    </nav>
  );
};

export default Sidebar;
