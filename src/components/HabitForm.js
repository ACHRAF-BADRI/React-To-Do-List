import React, { useState, useEffect } from 'react';

const HabitForm = ({ addHabit, showPriority }) => {
  const [habit, setHabit] = useState('');
  const [priority, setPriority] = useState('low');
  const [visible, setVisible] = useState(false); // Track form visibility for animation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      addHabit(habit, priority);
      setHabit('');
    }
  };

  // Trigger the animation when the component is mounted
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex flex-col space-y-4 p-6 rounded-lg mb-6 shadow-md text-black dark:text-white transform transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}
    >
      {/* Input for habit name */}
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 bg-white text-black dark:bg-gray-800 dark:text-white"  
        placeholder="Enter a new habit"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />

      {/* Conditionally render the Priority Level if the user has selected to show it */}
      {showPriority && (
        <div>
          <label htmlFor="priority" className="block mb-2">Priority Level:</label>
          <select
            id="priority"
            className="border border-gray-300 rounded-lg p-2 w-full bg-white text-black dark:bg-gray-800 dark:text-white"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      )}

      <button
        type="submit"
        className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;
