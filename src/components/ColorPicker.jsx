import React from "react";
import { useState } from "react";

const ColorPicker =({ color, OnChangeColor}) =>{

const handleColorChange = (e) =>{

    const newColor = e.target.value;

    OnChangeColor(newColor);
};

return (

    <div className="color-picker">
        <label>Select a color</label>
        <input type="color" value={color} OnChangeColor={handleColorChange} />
    </div>
)

}

export default ColorPicker;