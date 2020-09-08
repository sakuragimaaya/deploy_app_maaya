import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')

  const handleClick = () => {
    setText('Hello world')
  }

  return (
    <div>
      <button onClick={handleClick}
      >Click</button>
      {text}

    </div>
  );
}

export default App;
