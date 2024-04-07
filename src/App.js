import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [count, setCount] = useLocalStorage(0);

  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>useLocaStorage</h1>
      <h2>Persist state between user sessions</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={() => setCount(0)}>Reset to 0</button>
    </div>
  );
}
