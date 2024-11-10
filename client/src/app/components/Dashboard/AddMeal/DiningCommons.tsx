"use client";

import React, { useState } from 'react';
import FoodSection from './FoodSection';
import { FoodItem } from '../types';


const bowlItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Shoyu Ramen',
    calories: 0,
  }
];

const wokItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Stir Fry with Noodles',
    calories: 0,
  },
  {
    location: 'Worcester Commons',
    name: 'Stir Fry yum yum',
    calories: 0,
  }
];

const grillItems: FoodItem[] = [
  {
    location: 'Worcester Commons',
    name: 'Chicken Burger',
    calories: 0,
  },
  {
    location: 'Worcester Commons',
    name: 'Hamburger',
    calories: 0,
  },
  {
    location: 'Worcester Commons',
    name: 'Fries',
    calories: 0,
  },
  {
    location: 'Worcester Commons',
    name: 'Sweet Fries',
    calories: 0,
  }
];

const DiningCommons: React.FC = () => {
  return (
    <main className=" p-8 ml-[17%] mr-[22%] flex overflow-hidden flex-col items-center">
      <header className="overflow-hidden px-16 py-10 w-full text-4xl font-medium text-center text-white bg-red-900 rounded-3xl">
        DINING COMMONS
      </header>
      <section className="flex flex-col mt-6 w-full max-md:max-w-full">
        <FoodSection title="BOWL" items={bowlItems} />
        <FoodSection title="WOK" items={wokItems} />
        <FoodSection title="GRILL STATION" items={grillItems} />
      </section>
    </main>
  );
};

export default DiningCommons;