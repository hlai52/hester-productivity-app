// import { useState, useEffect } from "react";
import TodoList from "./components/todo/TodoList";
import Clock from "./components/clock/Clock";
import Calculator from "./components/calculator/Calculator";

import Music from "./components/music/Music";
function App() {
  return (
    <>
      <div>
        <Clock />
      </div>

      <div className="App">
        <h1> Aloha! Welcome, Hester</h1>
        <TodoList />
      </div>
      <div>
        <Calculator />
      </div>
      <div>
        <Music />
      </div>
    </>
  );
}

export default App;
