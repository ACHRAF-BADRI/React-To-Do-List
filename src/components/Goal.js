import React, { useState } from 'react';

const Goal = ({ goal, setGoal }) => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="goal-tracker mt-4">
      <h3>Goal: Complete {goal} times this month</h3>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded" onClick={() => setProgress(progress + 1)}>
        Mark as Completed
      </button>
      <p>Progress: {progress}/{goal}</p>
    </div>
  );
};

export default Goal;
