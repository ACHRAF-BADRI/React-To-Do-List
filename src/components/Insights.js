import React from 'react';

const Insights = ({ habits }) => {
  const totalHabits = habits.length;
  const completedHabits = habits.filter(habit => habit.completed).length;
  const completionRate = (completedHabits / totalHabits) * 100;

  return (
    <div className="insights mt-6">
      <h2 className="text-xl font-semibold">Insights</h2>
      <p>Completion Rate: {completionRate.toFixed(2)}%</p>
      <p>You are most consistent on weekdays!</p>
    </div>
  );
};

export default Insights;
