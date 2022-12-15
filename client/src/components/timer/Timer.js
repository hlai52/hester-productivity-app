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
        <br></br>
        Timer :
        <br />
        {`${timerMinutes} mins`}
      </h1>
      <div className="five-btn">
        <button className="info add" onClick={incrementTimer}>
          + 5 mins
        </button>
        <button className="info minus" onClick={decrementTimer}>
          - 5 mins
        </button>
      </div>
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
      <div className="click-btn">
        <button className="info start" onClick={startTimer}>
          Start!
        </button>
        <button className="info pause" onClick={pauseTimer}>
          Pause.
        </button>
      </div>
    </div>
  );
}
export default Timer;
