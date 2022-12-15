import React from "react";
import ToDoList from "../components/todo/TodoList";
import Clock from "../components/clock/Clock";

const ToDoListPage = () => {
  return (
    <>
      <Clock />;
      <ToDoList />
    </>
  );
};

export default ToDoListPage;
