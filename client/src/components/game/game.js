// Importing the required components
import Board from "./board";
import Info from "./info";

// Importing the CSS File
import "./app.css";

// Importing the useState hook
import { useState } from "react";

function App() {
  // Creating a reset state, which indicates whether
  // the game should be reset or not
  const [reset, setReset] = useState(false);

  // Creating a winner state, which indicates
  // the current winner
  const [winner, setWinner] = useState("");

  // Sets the reset property to true
  // which starts the chain
  // reaction of resetting the board
  const resetBoard = () => {
    setReset(true);
  };

  return (
    <div className="tictactoe">
      {/* Shrinks the popup when there is no winner */}
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        {/* Display the current winner */}
        <div className="winner-text">{winner}</div>
        {/* Button used to reset the board */}
        <button onClick={() => resetBoard()}>Reset Board</button>
      </div>
      {/* Custom made board component comprising of
			the tic-tac-toe board */}
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Info />
    </div>
  );
}

export default App;
