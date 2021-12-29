import React from "react";

function Player(props) {
  const {
    setRunning,
    setDisplayedTime,
    startTime,
    workOrPauseState,
    setWorkOrPauseState,
    setCurrentSession,
  } = props;

  function restartPomodoro() {
    setRunning(false);
    setDisplayedTime(startTime);
    setWorkOrPauseState("work");
    setCurrentSession(1);
  }

  return (
    <div>
      <button onClick={() => setRunning(true)}>
        Start {workOrPauseState === "work" ? "Working" : "Resting"}
      </button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => restartPomodoro()}>Restart</button>
    </div>
  );
}

export default Player;
