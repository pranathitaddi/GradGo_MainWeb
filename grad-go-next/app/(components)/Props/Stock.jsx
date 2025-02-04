"use client"
import React from 'react';
import { ChevronUp } from 'lucide-react';

const StockMarketBox = () => {
  const data = [
    { name: 'DOW J', description: 'Dow Jones Industrial Average', value: '35,120', change: '+225.98' },
    { name: 'JKSE', description: 'Jakarta Composite Index', value: '6,110', change: '+79.06' },
    { name: 'OTHER', description: 'Example Index', value: '148,19', change: '+14.56' },
  ];

  return (
    <div className="m-5 w-80 bg-[#1a1a2e] rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.8),-5px_-5px_10px_rgba(255,255,255,0.1)] p-6 flex flex-col gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-none">
          <div>
            <h1 className="text-white text-base font-semibold">{item.name}</h1>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-[#6948fe] text-lg font-bold">
              <ChevronUp className="w-4 h-4" />
              {item.value}
            </div>
            <p className="text-xs text-[#6948fe]">{item.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StockMarketBox;
