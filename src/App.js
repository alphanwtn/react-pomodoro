import { useState, useEffect } from "react";
import "./App.css";
import Player from "./Components/Player";
import Timer from "./Components/Timer";
import Setup from "./Components/Setup";
import AudioSection from "./Components/AudioSection";

function App() {
  const [startTime, setStartTime] = useState(25);
  const [displayedTime, setDisplayedTime] = useState(startTime);
  const [running, setRunning] = useState(false);
  const [alarmRing, setAlarmRing] = useState(false);
  const [workOrPauseState, setWorkOrPauseState] = useState("work"); // other state : pause

  useEffect(() => {
    // ######## TIMER
    let timeoutVar = null;
    if (running && displayedTime > 0) {
      timeoutVar = setTimeout(() => setDisplayedTime(displayedTime - 1), 1000);
      return () => clearTimeout(timeoutVar);
    }
  });

  useEffect(() => {
    // ######## RINGTONE (buggy)
    if (displayedTime === 0) {
      setAlarmRing(true);
      console.log("setallarm");
    } else if (displayedTime === startTime) {
      setAlarmRing(false);
      console.log("stopallarm");
    }
  });

  /*   useEffect(() => {
    if (displayedTime === 0 && workOrPauseState == "work") {
      setAlarmRing(true);
    } else if (displayedTime === startTime) {
      setAlarmRing(false);
    }
  }); */

  return (
    <div>
      <Timer toDisplay={displayedTime} running={running} />
      <Player
        running={running}
        setDisplayedTime={setDisplayedTime}
        setRunning={setRunning}
        startTime={startTime}
        workOrPauseState={workOrPauseState}
      />
      <Setup
        setDisplayedTime={setDisplayedTime}
        setRunning={setRunning}
        setStartTime={setStartTime}
        startTime={startTime}
      />
      <AudioSection alarmRing={alarmRing}></AudioSection>
    </div>
  );
}

export default App;
