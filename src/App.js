import React, { useState, useEffect } from "react";
import "./App.css";

import useKeyPress from "./hooks/useKeyPress";
function App() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    document.title = `Your score is ${score}`;
  });
const Moveleft = useKeyPress('a')
const MoveUp = useKeyPress('w')
const MoveDown = useKeyPress('s')
const MoveRight = useKeyPress('d')
  return (
    <div className="App">
      <header className="App-header">
        <div className="score">Your Score: {score}</div>
        <div className="tank"></div>
        {Moveleft && 'Left'}
        {MoveUp && 'Up'}
        {MoveDown && 'Down'}
        {MoveRight && 'Right'}

      </header>
    </div>
  );
}

export default App;
