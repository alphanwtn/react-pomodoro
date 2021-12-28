import React, { useState } from "react";

function Setup(props) {
  const {
    setRunning,
    startTime,
    setStartTime,
    setDisplayedTime,
    startRestingTime,
    setStartRestingTime,
    nbSessions,
    setNbSessions,
  } = props;

  const [setupTime, setSetupTime] = useState(startTime);
  const [setupRestingTime, setSetupRestingTime] = useState(startRestingTime);
  const [setupNbSessions, setSetupNbSessions] = useState(nbSessions);

  function handleSubmit(event) {
    event.preventDefault();
    setStartTime(parseInt(setupTime));
    //setDisplayedTime(setupTime);
    setRunning(false);
  }

  function handleSubmitResting(event) {
    event.preventDefault();
    setStartRestingTime(parseInt(setupRestingTime));
    //setDisplayedTime(setupRestingTime);
    setRunning(false);
  }

  function handleSubmitNbSessions(event) {
    event.preventDefault();
    setNbSessions(parseInt(setupNbSessions));
    //setDisplayedTime(setupNbSessions); Affichera le nb de sessions
    setRunning(false);
  }

  function handleChange(event) {
    setSetupTime(event.target.value);
  }

  function handleChangeResting(event) {
    setSetupRestingTime(event.target.value);
  }

  function handleChangeNbSessions(event) {
    setSetupNbSessions(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label name="worktime">Work Time :</label>
        <input
          onChange={handleChange}
          type="number"
          name="worktime"
          min="1"
          max="25"
        ></input>
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handleSubmitResting}>
        <label name="restingtime">Resting Time :</label>
        <input
          onChange={handleChangeResting}
          type="number"
          name="restingtime"
          min="1"
          max="25"
        ></input>
        <button type="submit">Update</button>
      </form>

      <form onSubmit={handleSubmitNbSessions}>
        <label name="nbsessions">Sessions Number :</label>
        <input
          onChange={handleChangeNbSessions}
          type="number"
          name="nbsessions"
          min="1"
          max="10"
        ></input>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Setup;
