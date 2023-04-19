import React from 'react';

const KPICardFinal = ({ title, value, growth }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex-grow border-t-4 border-indigo-600">
      <div className="flex items-center justify-between col-span-4">
        <div className="text-gray-800 text-xl font-semibold">{title}</div>
        <div className="bg-green-500 text-white rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 20v-18l-6 6h4v8h4v-8h4z"/>
          </svg>
        </div>
      </div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      <div className="text-green-500 text-right font-semibold mt-1">{growth}</div>
    </div>
  );
};

export default KPICardFinal;