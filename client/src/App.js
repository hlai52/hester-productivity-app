// import { useState, useEffect } from "react";
import TodoList from "./components/todo/TodoList";
import Clock from "./components/clock/Clock";
import Music from "./components/music/Music";
import Note from "./components/note/Note";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToDoListPage from "./pages/ToDoListPage";
import NotesPage from "./pages/NotesPage";
import Header from "./components/header/header";
import ErrorPage from "./pages/ErrorPage";
import Game from "./components/game/game";

function App() {
  return (
    //nested route-ex header will be on every page

    <BrowserRouter>
      <Header />
      <Clock />
      {/*can place header here  */}
      <Routes>
        <Route path="/home/" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        {/* nested child routes */}
        <Route path="/todolist" element={<ToDoListPage />} />

        <Route path="/notes" element={<NotesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Game />
    </BrowserRouter>
  );
}

export default App;
