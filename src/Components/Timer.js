import React from "react";

function Timer(props) {
  const { toDisplay, workOrPauseState } = props;

  return (
    <div style={{ fontSize: "100px" }}>
      <div
        style={
          workOrPauseState === "work" ? { color: "red" } : { color: "green" }
        }
      >
        {toDisplay}
      </div>
    </div>
  );
}

export default Timer;
