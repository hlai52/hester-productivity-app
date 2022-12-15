import React from "react";
import ToDoList from "../components/todo/TodoList";
import Clock from "../components/clock/Clock";
import Footer from "../components/footer/Footer";

const ToDoListPage = () => {
  return (
    <>
      <Clock />;
      <ToDoList />
      <Footer />
    </>
  );
};

export default ToDoListPage;
