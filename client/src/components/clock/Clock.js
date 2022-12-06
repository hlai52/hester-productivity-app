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
      <div class="clock-container">
        <div class="clock-col">
          <p class="clock-day clock-timer"></p>
          <p class="clock-label">Day</p>
        </div>
        <div class="clock-col">
          <p class="clock-hours clock-timer"></p>
          <p class="clock-label">Hours</p>
        </div>
        <div class="clock-col">
          <p class="clock-minutes clock-timer"></p>
          <p class="clock-label">Minutes</p>
        </div>
        <div class="clock-col">
          <p class="clock-seconds clock-timer"></p>
          <p class="clock-label">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default clock;
