import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToDoListPage from "./pages/ToDoListPage";
import NotesPage from "./pages/NotesPage";
import Header from "./components/header/header";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home/" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/todolist" element={<ToDoListPage />} />

        <Route path="/notes" element={<NotesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
