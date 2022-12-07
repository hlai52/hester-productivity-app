import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const header = () => {
  return (
    <>
      {/* <Router> */}
      <p>Header</p>
      {/* <Link to="/todolist">
          <button>To Do List</button>
        </Link> */}
      <button>Notes Page</button>
      {/* </Router> */}
    </>
  );
};

export default header;
