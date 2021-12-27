import React from "react";

function Player(props) {
  const { setRunning, setDisplayedTime, startTime } = props;

  return (
    <div>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setRunning(false);
          setDisplayedTime(startTime);
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Player;
