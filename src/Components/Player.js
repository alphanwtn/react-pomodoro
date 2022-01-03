import React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

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
    setDisplayedTime(startTime * 60);
    setWorkOrPauseState("work");
    setCurrentSession(1);
  }

  return (
    <div id="player-field">
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text button group"
        fullWidth
      >
        <Button onClick={() => setRunning(true)}>
          Start {workOrPauseState === "work" ? "Working" : "Resting"}
        </Button>
        <Button onClick={() => setRunning(false)}>Pause</Button>
        <Button onClick={() => restartPomodoro()}>Restart</Button>
      </ButtonGroup>
    </div>
  );
}

export default Player;
