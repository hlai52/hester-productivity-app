import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../Assets/Images/logo2.png";
import "./header.scss";

const header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo-container">
          <Link to="/">
            <img className="header__logo" alt="logo of a moon" src={logo}></img>
          </Link>
        </div>
        <div className="header__mvp-box">
          <p className="header__mvp">
            Designed for you to stay mindfully organized in the present moment.
          </p>
        </div>
        <div className="header__btn-container">
          <div className="header__todolist-btn">
            <Link to="/todolist">
              <button className="header__todo-btn">To-Do List</button>
            </Link>
          </div>
          <div className="header__notes-btn">
            <Link to="/notes">
              <button className="header__work-btn">Work Corner</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
