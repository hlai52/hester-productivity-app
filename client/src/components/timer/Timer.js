import React from "react";

const Timer = () => {
  return (
    <>
      <h1>FreeCodeCamp</h1>
      <main ng-app="PomodoroApp" ng-controller="MainCtrl">
        <header>
          <div class="session">
            <div class="breakCtrl">
              <p>break length</p>
              <button class="minus" ng-click="breakLengthChange(-1)">
                -
              </button>
              <span class="time">{{ breakLength }}</span>
              <button class="plus" ng-click="breakLengthChange(1)">
                +
              </button>
            </div>
            <div class="sessionCtrl">
              <p>session length</p>
              <button class="minus" ng-click="sessionLengthChange(-1)">
                -
              </button>
              <span class="time">{{ sessionLength }}</span>
              <button class="plus" ng-click="sessionLengthChange(1)">
                +
              </button>
            </div>
          </div>
        </header>
        <section ng-click="toggleTimer()">
          <div class="timer">
            <p class="title">{{ sessionName }}</p>
            <p>{{ timeLeft }}</p>
            <span
              class="fill"
              ng-style="{'height':fillHeight, 'background':fillColor }"
            ></span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Timer;
