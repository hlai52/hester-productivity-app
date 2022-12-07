import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <p>Header</p>
      <Link to="/todolist">
        <button>To Do List</button>
      </Link>
      <Link to="/notes">
        <button>Notes Page</button>
      </Link>
    </>
  );
};

export default header;
