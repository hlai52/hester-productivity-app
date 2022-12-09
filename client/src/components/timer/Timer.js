import { useState, React } from "react";
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
  const [key, setKey] = useState(0);
  return (
    <div className="App">
      <h1>
        Timer :
        <br />
        30 mins
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={1800}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <button className="info"> Click here to start!</button>
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
