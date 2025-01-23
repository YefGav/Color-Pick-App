import React from 'react';

function ColorDisplay({ color }) {
  return (
    <div className="ColorDisplay" style={{ backgroundColor: color }}>
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorDisplay;
