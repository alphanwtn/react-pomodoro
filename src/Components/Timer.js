import React from "react";

function Timer(props) {
  const { running, toDisplay } = props;

  return <div style={running ? { color: "red" } : null}>{toDisplay}</div>;
}

export default Timer;
