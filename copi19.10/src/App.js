
import './App.css';
import { useState } from 'react';
import BOBA from './BOBA';

function App() {
  const [state, setState] = useState(false)

  function color() {
    setState(!state)
  }

  return (
    <div className="App">
      <h1 style={{ color: !state && 'red' }}>Hello world!</h1>
      <div>
        <BOBA state={state} />
      </div>
      <button onClick={color}>нажми</button>
    </div >
  );
}

export default App;
