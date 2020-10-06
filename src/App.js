import React, { useState, useEffect } from "react";
import "./App.css";

import useEventListener from "./hooks/useEventListener";
import useKeyPress from "./hooks/useKeyPress";
function App() {
  const [score, setScore] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);
  useEventListener("mousemove", ({ clientX, clientY }) =>
    setCoords({ x: clientX, y: clientY })
  );
  useEffect(() => {
    document.title = `Your score is ${score}`;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then(data => setData(data));

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
        {Moveleft && 'left'}
        {MoveUp && 'Up'}
        {MoveDown && 'Down'}
        {MoveRight && 'Right'}
        <p>{JSON.stringify(coords)}</p>
        <button onClick={() => setScore(score + 1)}>Add Score</button>
        <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
