import React from "react";
import error from "../Assets/Images/error.svg";
import crtlz from "../Assets/Images/crtlz.svg";

function ErrorPage() {
  return (
    <>
      <img
        className="error__robot"
        alt="cartoon girl in a robot"
        src={error}
      ></img>
      <h1>Error 404 - Please go back !</h1>
      <img
        className="error__crtl-z"
        alt="cartoon girl with button crtl and z"
        src={crtlz}
      ></img>
    </>
  );
}

export default ErrorPage;
