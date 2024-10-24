import React, { useState, useEffect } from 'react';

const HabitList = ({ habits, toggleHabit, showTime, showPriority }) => {
  const priorityOrder = { high: 1, medium: 2, low: 3 };

  // Sort the habits by priority
  const sortedHabits = habits.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  // State to track which habits have been rendered for animation
  const [renderedHabits, setRenderedHabits] = useState([]);

  useEffect(() => {
    // Update the list of rendered habits whenever a new habit is added
    setRenderedHabits(habits.map((_, index) => index));
  }, [habits]);

  return (
    <div>
      {habits.length === 0 && (
        <p className="text-gray-600 text-center">No habits added yet.</p>
      )}
      {sortedHabits.map((habit, index) => (
        <div
          key={index}
          className={`flex justify-between items-center mb-4 p-4 rounded-lg shadow-md transition-transform duration-500 ease-out ${
            renderedHabits.includes(index) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } ${
            habit.completed ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          <div className="flex flex-col">
            <span
              className={`text-lg ${habit.completed ? 'line-through text-gray-600' : 'text-black dark:text-gray-600'}`}
            >
              {habit.name}
            </span>

            {/* Conditionally render the priority label based on the "Show Priority" setting */}
            {showPriority && (
              <span 
                className={`mt-1 text-white px-2 py-1 rounded-md text-sm font-semibold ${
                  habit.priority === 'low' ? 'bg-green-500' : 
                  habit.priority === 'medium' ? 'bg-orange-500' : 
                  'bg-red-500'
                }`}
              >
                {habit.priority.charAt(0).toUpperCase() + habit.priority.slice(1)} Priority
              </span>
            )}
          </div>
          
          <div className="flex flex-col items-end">
            <button
              className={`text-sm px-4 py-2 rounded-lg ${
                habit.completed ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}
              onClick={() => toggleHabit(index)}
            >
              {habit.completed ? 'Completed' : 'Mark as Done'}
            </button>

            {/* Display Time if showTime is true */}
            {showTime && (
              <span className="text-xs text-gray-500 mt-2">{habit.timeAdded}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
