import React, { useState } from 'react';
import ColorChangeButton from './ColorChangeButton';
import './App.css';

function App() {
  const [color, setColor] = useState(" ")
  
  return (
    <div className={"react-root " + color}>
      <div className="centered">
        <h1>Color Picker</h1>
        <ColorChangeButton color="pink" setColor={setColor} />
        <ColorChangeButton color="gold" setColor={setColor} />
        <ColorChangeButton color="aqua" setColor={setColor} />
      </div>

    </div>
  );
}

export default App;
