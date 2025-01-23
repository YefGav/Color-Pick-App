import React from 'react';

const ColorPicker = ({ color, onChangeColor }) => {
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    onChangeColor(newColor);
  };

  return (
    <div className="ColorPicker">
      <label>Select a color</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
