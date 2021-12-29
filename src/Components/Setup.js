import React from "react";

function Setup(props) {
  const {
    workOrPauseState,
    startTime,
    setStartTime,
    setDisplayedTime,
    startRestingTime,
    setStartRestingTime,
    nbSessions,
    setNbSessions,
  } = props;

  function handleChange(event) {
    setStartTime(parseInt(event.target.value));
    if (workOrPauseState === "work") {
      setDisplayedTime(parseInt(event.target.value) * 60);
    }
  }

  function handleChangeResting(event) {
    setStartRestingTime(parseInt(event.target.value));
    if (workOrPauseState === "pause") {
      setDisplayedTime(parseInt(event.target.value) * 60);
    }
  }

  function handleChangeNbSessions(event) {
    setNbSessions(parseInt(event.target.value));
  }

  return (
    <div>
      <label name="worktime">Work Time :</label>
      <input
        value={startTime}
        onChange={handleChange}
        type="number"
        name="worktime"
        min="1"
        max="50"
      ></input>

      <label name="restingtime">Resting Time :</label>
      <input
        value={startRestingTime}
        onChange={handleChangeResting}
        type="number"
        name="restingtime"
        min="1"
        max="25"
      ></input>

      <label name="nbsessions">Sessions Number :</label>
      <input
        value={nbSessions}
        onChange={handleChangeNbSessions}
        type="number"
        name="nbsessions"
        min="1"
        max="10"
      ></input>
    </div>
  );
}

export default Setup;
