import React from "react";

function Timer(props) {
  const { toDisplay, workOrPauseState } = props;

  function secondsToCLock(toDisplay) {
    return (
      Math.floor(toDisplay / 60) +
      ":" +
      (toDisplay % 60 < 10 ? "0" : "") +
      (toDisplay % 60)
    );
  }

  return (
    <div
      style={
        workOrPauseState === "work"
          ? { color: "red", fontSize: "100px" }
          : { color: "green", fontSize: "100px" }
      }
    >
      {secondsToCLock(toDisplay)}
    </div>
  );
}

export default Timer;
