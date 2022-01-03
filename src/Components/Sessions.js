import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function Sessions(props) {
  const { currentSession, nbSessions, workOrPauseState } = props;

  let sessionList = [];

  for (let i = 1; i <= nbSessions; i++) {
    if (i < currentSession) {
      sessionList.push(<CircleIcon key={i} style={{ fill: "grey" }} />);
    }

    if (i == currentSession && workOrPauseState === "work") {
      sessionList.push(<CircleIcon key={i} style={{ fill: "red" }} />);
    } else if (i == currentSession && workOrPauseState === "pause") {
      sessionList.push(<CircleIcon key={i} style={{ fill: "green" }} />);
    }

    if (i > currentSession) {
      sessionList.push(<CircleOutlinedIcon key={i} style={{ fill: "grey" }} />);
    }
  }

  return <div id="session-field">{sessionList}</div>;
}

export default Sessions;
