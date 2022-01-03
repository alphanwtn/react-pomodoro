import React from "react";
import { TextField } from "@mui/material";

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
    <div id="setup-field">
      <TextField
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{ inputProps: { min: 1, max: 99 } }}
        type="number"
        value={startTime}
        sx={{ width: "25%" }}
        size="small"
        label="Work Time"
        variant="standard"
        onChange={handleChange}
      />

      <TextField
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{ inputProps: { min: 1, max: 99 } }}
        type="number"
        value={startRestingTime}
        sx={{ width: "25%" }}
        size="small"
        label="Rest Time"
        variant="standard"
        onChange={handleChangeResting}
      />

      <TextField
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        InputProps={{ inputProps: { min: 1, max: 99 } }}
        type="number"
        value={nbSessions}
        sx={{ width: "25%" }}
        size="small"
        label="Sessions Number"
        variant="standard"
        onChange={handleChangeNbSessions}
      />
    </div>
  );
}

export default Setup;
