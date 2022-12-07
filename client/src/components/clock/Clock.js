import React from "react";
import "../clock/Clock.scss";
import moment from "moment";

document.addEventListener("DOMContentLoaded", () =>
  requestAnimationFrame(updateTime)
);

function updateTime() {
  document.documentElement.style.setProperty(
    "--timer-day",
    "'" + moment().format("dd") + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-hours",
    "'" + moment().format("k") + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-minutes",
    "'" + moment().format("mm") + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-seconds",
    "'" + moment().format("ss") + "'"
  );
  requestAnimationFrame(updateTime);
}

const clock = () => {
  return (
    <div>
      <div className="clock-container">
        <div className="clock-col">
          <p className="clock-day clock-timer"></p>
          <p className="clock-label">Day</p>
        </div>
        <div className="clock-col">
          <p className="clock-hours clock-timer"></p>
          <p className="clock-label">Hours</p>
        </div>
        <div className="clock-col">
          <p className="clock-minutes clock-timer"></p>
          <p className="clock-label">Minutes</p>
        </div>
        <div className="clock-col">
          <p className="clock-seconds clock-timer"></p>
          <p className="clock-label">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default clock;
