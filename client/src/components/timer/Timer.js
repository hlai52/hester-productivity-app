import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./timer.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function App() {
  const [key, setKey] = useState(0);
  return (
    <div className="App">
      <h1>
        CountdownCircleTimer
        <br />
        React Component
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={10}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className="button-wrapper">
        <button onClick={() => setKey((prevKey) => prevKey + 1)}>
          Restart Timer
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export { renderTime, App };
