import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [switchStatus, setswitchStatus] = useState(0);
  
  return (
    <>
      <h1>Vite + React</h1>
      <h1>Hello world</h1>
      <div className="card">
      <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setswitchStatus(switchStatus + 1)}>
          {switchStatus%2? "ON" : "OFF" }
        </button>
      </div>
    </>
  );
}

export default App;