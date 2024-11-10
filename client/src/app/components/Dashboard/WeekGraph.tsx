import React from 'react';
import VerticalProgressBar from './VerticalProgressBar';

const WeekGraph: React.FC = () => {
  return (
    <section>
      <h2 className="self-stretch w-full text-base font-medium whitespace-nowrap text-neutral-800">
        WEEK
      </h2>
      <div className="flex gap-x-3 justify-center items-end self-center mt-9 w-60 max-w-full rounded-md border border-solid border-neutral-400 min-h-[116px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <VerticalProgressBar carbs={50} protein={20} fat={100} />
        <VerticalProgressBar carbs={100} protein={100} fat={100} />
        <VerticalProgressBar carbs={100} protein={100} fat={100} />
        <VerticalProgressBar carbs={100} protein={100} fat={100} />
        <VerticalProgressBar carbs={100} protein={100} fat={100} />
        <VerticalProgressBar carbs={100} protein={100} fat={100} />
        <VerticalProgressBar carbs={100} protein={100} fat={100} />
      </div>
    </section>
  );
};

export default WeekGraph;