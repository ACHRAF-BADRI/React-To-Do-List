import React, { useState } from 'react';
import { CogIcon } from '@heroicons/react/outline'; // Import Heroicons

const NavBar = ({
  darkMode, setDarkMode, 
  showPriority, setShowPriority, 
  showTime, setShowTime, 
  clearHabits, 
  deleteCompletedHabits, 
  deleteUncompletedHabits 
}) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <nav className="bg-indigo-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Habit Tracker</div>
        
        <div className="flex space-x-4 items-center">
          {/* Dark Mode Toggle Switch */}
          <div className="flex items-center">
            <span className="text-white mr-2">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={darkMode} 
                onChange={() => setDarkMode(!darkMode)} 
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-indigo-600 relative transition-colors duration-300 ease-in-out">
                <span 
                  className={`absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
                    darkMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                ></span>
              </div>
            </label>
          </div>

          {/* Settings Icon */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="text-white hover:text-gray-300"
          >
            <CogIcon className="h-6 w-6" />
          </button>
        </div>

        {showSettings && (
          <div className="absolute right-4 top-16 bg-white shadow-lg p-4 rounded-lg w-64">
            {/* Toggle for showing Priority Level */}
            <label className="flex items-center space-x-2 mb-4">
              <input 
                type="checkbox" 
                checked={showPriority} 
                onChange={() => setShowPriority(!showPriority)} 
                className="text-indigo-600"
              />
              <span className="text-black">Show Priority Labels</span>
            </label>

            {/* Toggle for showing time added */}
            <label className="flex items-center space-x-2 mb-4">
              <input 
                type="checkbox" 
                checked={showTime} 
                onChange={() => setShowTime(!showTime)} 
                className="text-indigo-600"
              />
              <span className="text-black">Show Time Added</span>
            </label>

            {/* Clear List Button */}
            <button
              onClick={clearHabits}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full mb-4"
            >
              Clear Habit List
            </button>

            {/* Delete Completed Habits Button */}
            <button
              onClick={deleteCompletedHabits}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full mb-4"
            >
              Delete Completed Habits
            </button>

            {/* Delete Uncompleted Habits Button */}
            <button
              onClick={deleteUncompletedHabits}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 w-full"
            >
              Delete Uncompleted Habits
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
