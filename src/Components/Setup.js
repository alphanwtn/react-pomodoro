import React, { useState } from "react";

function Setup(props) {
  const { startTime, setStartTime, setDisplayedTime, setRunning } = props;

  const [setupTime, setSetupTime] = useState(startTime);

  function handleSubmit(event) {
    event.preventDefault();
    setStartTime(setupTime);
    setDisplayedTime(setupTime);
    setRunning(false);
  }

  function handleChange(event) {
    setSetupTime(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label name="worktime">Work Time :</label>
        <input
          onChange={handleChange}
          type="number"
          name="worktime"
          min="0"
          max="25"
        ></input>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Setup;
