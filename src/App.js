import React, { useState } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import NavBar from './components/NavBar';

function App() {
  const [habits, setHabits] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showPriority, setShowPriority] = useState(true); // Controls showing all priority labels
  const [showTime, setShowTime] = useState(false);

  // Function to add habit with time
  const addHabit = (habit, priority) => {
    const currentTime = new Date().toLocaleString(); // Get current time
    setHabits([...habits, { name: habit, completed: false, priority, timeAdded: currentTime }]);
  };

  // Function to toggle habit completion
  const toggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };

  // Function to delete completed habits
  const deleteCompletedHabits = () => {
    setHabits(habits.filter(habit => !habit.completed));  // Keep only uncompleted habits
  };

  // Function to delete uncompleted habits
  const deleteUncompletedHabits = () => {
    setHabits(habits.filter(habit => habit.completed));  // Keep only completed habits
  };

  // Function to clear the habit list
  const clearHabits = () => {
    setHabits([]);  // Clear the list
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <NavBar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        showPriority={showPriority} 
        setShowPriority={setShowPriority} // Control priority display
        showTime={showTime} 
        setShowTime={setShowTime}
        clearHabits={clearHabits}
        deleteCompletedHabits={deleteCompletedHabits} 
        deleteUncompletedHabits={deleteUncompletedHabits}
      />

      <div className="container mx-auto p-8">
        <div className="max-w-3xl mx-auto rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-300">Habit Tracker</h1>
          
          {/* Form to add new habit with optional priority */}
          <HabitForm addHabit={addHabit} showPriority={showPriority} />

          {/* List of habits with priority */}
          <HabitList habits={habits} toggleHabit={toggleHabit} showTime={showTime} showPriority={showPriority} />
        </div>
      </div>
    </div>
  );
}

export default App;
