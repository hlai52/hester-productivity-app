import React from "react";
import Notes from "../components/note/Note";
import Music from "../components/music/Music";
import Timer from "../components/timer/Timer";
import Clock from "../components/clock/Clock";
import TodoList from "../components/todo/TodoList";
import Footer from "../components/footer/Footer";
const NotesPage = () => {
  return (
    <div>
      <Clock />
      <Timer />
      <Notes />
      <TodoList />
      <Music />
      <Footer />
    </div>
  );
};

export default NotesPage;
