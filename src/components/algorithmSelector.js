import React from 'react';

function AlgorithmSelector({ selected, onChange }) {
  return (
    <div id="algorithmSelection">
      <label htmlFor="algorithmSelect">Choose an algorithm:</label>
      <select
        id="algorithmSelect"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="lines">Lines</option>
        <option value="wave">Waves</option>
      </select>
    </div>
  );
}

export default AlgorithmSelector;
