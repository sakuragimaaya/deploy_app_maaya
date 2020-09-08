import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, SetCount] = useState(0);

  const increment = () => {
    SetCount(count + 1)
    console.log(count);
  };

  const downcrement = () => {
    SetCount(count - 1)
    console.log(count);
  };

  const resetcrement = () => {
    SetCount(0)
    console.log(count);
  };



  return (
    <div>
      <button onClick={increment}>いいね！</button>
      <button onClick={downcrement}>よくないね！</button>
      <button onClick={resetcrement}>reset</button>
      {count}
    </div>
  );
}

export default App;
