import React from "react";

function Timer(props) {
  const { toDisplay, workOrPauseState } = props;

  return (
    <div
      style={
        workOrPauseState === "work" ? { color: "red" } : { color: "green" }
      }
    >
      {toDisplay}
    </div>
  );
}

export default Timer;
