// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";

// import "./timer.css";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// const renderTime = ({ remainingTime }) => {
//   if (remainingTime === 0) {
//     return <div className="timer">Too late brooooo...</div>;
//   }

//   return (
//     <div className="timer">
//       <div className="text">Remaining</div>
//       <div className="value">{remainingTime}</div>
//       <div className="text">seconds</div>
//     </div>
//   );
// };

// function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [duration, setDuration] = useState(10);

//   return (
//     <div className="App">
//       <h1>
//         CountdownCircleTimer
//         <br />
//         React Component
//       </h1>
//       <div className="timer-wrapper">
//         <CountdownCircleTimer
//           isPlaying={isPlaying}
//           duration={duration}
//           colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//           colorsTime={[10, 6, 3, 0]}
//           onComplete={() => ({ shouldRepeat: true, delay: 1 })}
//         >
//           {renderTime}
//         </CountdownCircleTimer>
//       </div>
//       <div
//         onClick={() => setIsPlaying(!isPlaying)}
//       >{`Clicl to start (right now we ${
//         isPlaying ? "playin" : "ain't playing"
//       })`}</div>
//       <div onClick={() => setDuration(duration + 10)}>+10 s</div>
//       <div onClick={() => setDuration(duration - 10)}>-10 s</div>
//       <div onClick={() => setDuration(0)}>Just too lale</div>
//       <p className="info">
//         Change component properties in the code filed on the right to try
//         difference functionalities
//       </p>
//     </div>
//   );
// }
// export default App;
