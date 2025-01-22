import React from "react";
import { ColorPicker } from "./ColorPicker";

export const ColorDisplay = ({ color }) => {

    return (
        <div className="color-display" style={{ backgroundColor: color }}>
            <p>{color}</p>
        </div>
    );
}

export default ColorDisplay;