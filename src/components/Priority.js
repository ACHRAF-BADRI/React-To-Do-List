import React from 'react';

const Priority = ({ setPriority }) => (
  <div className="priority-selector">
    <label htmlFor="priority">Priority Level:</label>
    <select onChange={(e) => setPriority(e.target.value)} name="priority" id="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>
);

export default Priority;
