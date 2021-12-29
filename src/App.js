import { useState, useEffect } from "react";
import "./App.css";
import Player from "./Components/Player";
import Timer from "./Components/Timer";
import Setup from "./Components/Setup";
import AudioSection from "./Components/AudioSection";
import Sessions from "./Components/Sessions";

function App() {
  const [startTime, setStartTime] = useState(25);
  const [startRestingTime, setStartRestingTime] = useState(5);
  const [nbSessions, setNbSessions] = useState(4);
  const [currentSession, setCurrentSession] = useState(1);
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
      setRunning(false);
      setAlarmRing(true);
      console.log("setalarm");
      return () => setAlarmRing(false);
    } else if (displayedTime === startTime) {
      setAlarmRing(false);
      console.log("stopalarm");
    }
  });

  useEffect(() => {
    // ######## SWITCHING WORK / PAUSE State
    if (
      running === false &&
      workOrPauseState === "work" &&
      displayedTime === 0
    ) {
      setWorkOrPauseState("pause");
      setDisplayedTime(startRestingTime);
    } else if (
      running === false &&
      workOrPauseState === "pause" &&
      displayedTime === 0
    ) {
      setWorkOrPauseState("work");
      setDisplayedTime(startTime);
      setCurrentSession(currentSession + 1);
    }
  });

  if (currentSession === nbSessions && workOrPauseState === "pause") {
    return (
      <div>
        <img
          src="https://images.caradisiac.com/logos/4/6/6/4/194664/S0-fiat-chrysler-annonce-des-milliers-d-emplois-aux-etats-unis-111938.jpg"
          style={{ width: "1080px", height: "auto" }}
          alt="Trump photo"
        />
        <AudioSection alarmRing={alarmRing}></AudioSection>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Timer toDisplay={displayedTime} workOrPauseState={workOrPauseState} />
        <Sessions currentSession={currentSession} nbSessions={nbSessions} />
        <Player
          running={running}
          setDisplayedTime={setDisplayedTime}
          setRunning={setRunning}
          startTime={startTime}
          workOrPauseState={workOrPauseState}
          setWorkOrPauseState={setWorkOrPauseState}
          setCurrentSession={setCurrentSession}
        />

        <Setup
          setDisplayedTime={setDisplayedTime}
          workOrPauseState={workOrPauseState}
          setStartTime={setStartTime}
          startTime={startTime}
          setStartRestingTime={setStartRestingTime}
          startRestingTime={startRestingTime}
          nbSessions={nbSessions}
          setNbSessions={setNbSessions}
        />
        <AudioSection alarmRing={alarmRing}></AudioSection>
      </div>
    );
  }
}

export default App;
