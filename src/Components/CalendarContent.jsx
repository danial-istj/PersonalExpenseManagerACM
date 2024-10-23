import React from 'react';
import { calendarData } from '../Data/CalendarData';

function CalendarContent() {
  const tabs = ['Day', 'Week', 'Month'];

  return (
    <div className="ml-[40px] mt-[40px] relative bg-gray-200 dark:text-white dark:bg-black">
      <div className="p-4 bg-gray-100 min-h-screen dark:bg-black">
        

        
        <div className="mt-2"> 
          <div className="flex justify-center mb-4">
            {tabs.map((tab) => (
              <button
                className="mx-2 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-400 dark:bg-darkdivbginner dark:hover:bg-darkdivbghover dark:text-white hover:text-bluet dark:hover:text-bluet"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="border border-gray-300 rounded-lg bg-white dark:bg-darkdivbginner dark:text-white">
            <div className="grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-700">
              {calendarData.map((e) => (
                <div
                  className={`relative h-16 border-b border-gray-200 dark:border-gray-700 text-gray-500 ${
                    e.reminder ? 'bg-gray-200 hover:bg-gray-400 dark:bg-darkdivbghover dark:hover:bg-thatred dark:text-white' : 'dark:text-white'
                  }`}
                >
                  <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-sm">
                    <span>{e.label}</span>
                    {e.reminder && <span>{e.reminder}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarContent;
