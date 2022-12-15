import React from "react";
import Notes from "../components/note/Note";
import Music from "../components/music/Music";
import Timer from "../components/timer/Timer";
import Clock from "../components/clock/Clock";
import TodoList from "../components/todo/TodoList";
const NotesPage = () => {
  return (
    <div>
      <Clock />;
      <Timer />
      <Notes />
      <TodoList />
      <Music />
    </div>
  );
};

export default NotesPage;
