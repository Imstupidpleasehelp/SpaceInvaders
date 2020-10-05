import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [Score, setScore] = useState(0);
  useEffect(() => {
    document.title = `Your score is ${Score}`;
  });
  return (
    <div className="App">
      <header className="App-header">
        
{Score}
<button onClick={() => setScore(Score + 1)}>Add Score</button>
      </header>
    </div>
  );
}

export default App;


