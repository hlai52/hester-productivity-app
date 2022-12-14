import { useState, React, useCallback } from "react";
//
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.css";

const formatRemainingTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${minutes}:${seconds}`;
};

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining time</div>
      <div className="value">{formatRemainingTime(remainingTime)}</div>
    </div>
  );
};

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(30);

  const incrementTimer = useCallback(() => {
    setTimerMinutes(timerMinutes + 5);
  }, [timerMinutes]);

  const decrementTimer = useCallback(() => {
    if (timerMinutes > 5) {
      setTimerMinutes(timerMinutes - 5);
    }
  }, [timerMinutes]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  return (
    <div className="timer">
      <h1>
        Timer :
        <br />
        {`${timerMinutes} mins`}
      </h1>
      <button className="info" onClick={incrementTimer}>
        Add 5mns
      </button>
      <button className="info" onClick={decrementTimer}>
        Remove 5mns
      </button>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={isRunning}
          duration={60 * timerMinutes}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <button className="info" onClick={startTimer}>
        Click here to start!
      </button>
      <button className="info" onClick={pauseTimer}>
        Click here to pause!
      </button>
    </div>
  );
}
export default Timer;

// second timer layout- just one
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";

// import "./timer.css";

// const renderTime = ({ remainingTime }) => {
//   if (remainingTime === 0) {
//     return <div className="timer">Too late...</div>;
//   }

//   return (
//     <div className="timer">
//       <div className="text">Remaining</div>
//       <div className="value">{remainingTime}</div>
//       <div className="text">seconds</div>
//     </div>
//   );
// };

// const children = ({ remainingTime }) => {
//   const minutes = Math.floor(remainingTime / 60);
//   const seconds = remainingTime % 60;

//   return `${minutes}:${seconds}`;
// };

// function Timer() {
//   const [key, setKey] = useState(0);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [duration, setDuration] = useState(10);

//   return (
//     <div className="App">
//       <h1>
//         Timer
//         <br />
//         Countdown
//       </h1>
//       <div className="timer-wrapper">
//         <CountdownCircleTimer
//           isPlaying={isPlaying}
//           duration={duration}
//           colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//           colorsTime={[10, 6, 3, 0]}
//           onComplete={() => ({ shouldRepeat: true, delay: 1 })}
//         ></CountdownCircleTimer>
//         {renderTime}
//         <div
//           onClick={() => setIsPlaying(!isPlaying)}
//         >{`Click to start (right now we ${
//           isPlaying ? "playin" : "ain't playing"
//         })`}</div>

//         <div onClick={() => setDuration(duration + 10)}>+10 s</div>
//         <div onClick={() => setDuration(duration - 10)}>-10 s</div>
//         <div onClick={() => setDuration(0)}>Just too latee</div>
//         <p className="info"></p>
//       </div>
//     </div>
//   );
// }

// export { renderTime, Timer };
