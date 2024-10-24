import React, { useState } from 'react';

const Notes = () => {
  const [note, setNote] = useState("");

  return (
    <div className="habit-note mt-4">
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Write a note about your habit completion..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <p className="mt-2">Note: {note}</p>
    </div>
  );
};

export default Notes;
