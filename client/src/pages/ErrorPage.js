import React from "react";
import error from "../Assets/Images/error.svg";
import uhoh from "../Assets/Images/uoh.svg";
import jello from "../Assets/Images/stuckjello.svg";
import "./ErrorPage.scss";

function ErrorPage() {
  return (
    <>
      <div className="error">
        <img
          className="error__robot"
          alt="cartoon girl in a robot"
          ß
          src={error}
        ></img>
        <h1 className="error__message ">
          Error 404.<br></br> Please go back..
        </h1>
        <img
          className="error__jello"
          alt="cartoon girl stuck in jello"
          src={jello}
        ></img>
      </div>
    </>
  );
}

export default ErrorPage;
