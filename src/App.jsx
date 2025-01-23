import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker.jsx';
import ColorDisplay from './components/ColorDisplay.jsx';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Color Picker App</h1>
      <ColorPicker color={selectedColor} onChangeColor={setSelectedColor} />
      <ColorDisplay color={selectedColor} />
    </div>
  );
}

export default App;
