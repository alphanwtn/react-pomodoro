import React from "react";

function Sessions(props) {
  const { currentSession, nbSessions } = props;
  return (
    <div>
      {currentSession} / {nbSessions}
    </div>
  );
}

export default Sessions;
