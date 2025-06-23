import React from 'react';

const Iconcards = ({ icon, description, para }) => {
  return (
    <div className="w-full sm:w-[260px] bg-white dark:bg-card rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="text-red-500 dark:text-red-400 text-[60px] mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white text-center">
        {description}
      </h3>
      {para && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center leading-snug">
          {para}
        </p>
      )}
    </div>
  );
};

export default Iconcards;
