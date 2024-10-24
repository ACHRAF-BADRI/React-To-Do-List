import React from 'react';

const Streak = ({ streakCount }) => (
  <div className="bg-indigo-200 p-4 rounded-md text-center">
    <h3 className="text-2xl font-bold">Current Streak</h3>
    <p className="text-lg">{streakCount} days in a row!</p>
  </div>
);

export default Streak;
