import { useState, React, useCallback } from "react";
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
      <div className="text">Time left :</div>

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
        + 5 mins
      </button>
      <button className="info" onClick={decrementTimer}>
        - 5 mins
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
        Click here to pause.
      </button>
    </div>
  );
}
export default Timer;
