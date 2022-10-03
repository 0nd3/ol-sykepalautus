import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [upRate, setUpRate] = useState(0);
  const  [downRate, setDownRate] = useState(0);

  function calculate(){
    setUpRate((220 - age) * 0.85);
    setDownRate((220 - age) * 0.65);
  }
  return (
    <div>
      <h1>Heart rate limits calculator</h1>
      <form>
        <div>
          <label>age</label>
          
          <br/>
          <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
          
          <br/>
          <label>rate</label>
        </div>
        <div>
          <output>{downRate.toFixed(0)}</output>
          <label>-</label>
          <output>{upRate.toFixed(0)}</output>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
