import React, { useState, useEffect } from "react";
import "./App.css";

import useEventListener from "./hooks/useEventListener";
import useKeyPress from "./hooks/useKeyPress";
function App() {
  const [score, setScore] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

 
  useEventListener("mousemove", ({ clientX, clientY }) =>
    setCoords({ x: clientX, y: clientY })
  );
  useEffect(() => {
    document.title = `Your score is ${score}`;

  });
const Moveleft = useKeyPress('a')
const MoveUp = useKeyPress('w')
const MoveDown = useKeyPress('s')
const MoveRight = useKeyPress('d')


const t = document.getElementById('thingy')
let position = 0
const moveThingy = ({code}) => {
  console.log(`${code}`, t.style.left)
  if (code == 'KeyA') {
    t.style.left = `${position -= 20}px`
  }
  if (code == 'KeyD') {
    t.style.left = `${position += 20}px`
  }
}

document.addEventListener('keydown', moveThingy);

  return (
    <div className="App">
      <header className="App-header">
        <div className="score">Your Score: {score}</div>
        <div style={{width: 50, height:50, backgroundColor: 'white'}} className="tank" id="thingy"></div>
       
      
        <p>{JSON.stringify(coords)}</p>
        <button onClick={() => setScore(score + 1)}>Add Score</button>
        
      </header>
    </div>
  );
}

export default App;
