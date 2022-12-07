import { useState, useEffect } from "react";
import TodoList from "./components/todo/TodoList";
import Clock from "./components/clock/Clock";
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
        <Music />
      </div>
    </>
  );
}

export default App;
