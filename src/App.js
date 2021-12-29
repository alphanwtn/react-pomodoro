import { useState, useEffect } from "react";
import "./App.css";
import Player from "./Components/Player";
import Timer from "./Components/Timer";
import Setup from "./Components/Setup";
import AudioSection from "./Components/AudioSection";
import Sessions from "./Components/Sessions";

function App() {
  /*   startTime et startRestingTime sont en minutes, displayedTime doit contenir l'équivalent en secondes.
  La traduction sous format "clock" se fait dans Timer */

  const [startTime, setStartTime] = useState(25);
  const [startRestingTime, setStartRestingTime] = useState(5);
  const [nbSessions, setNbSessions] = useState(4);
  const [currentSession, setCurrentSession] = useState(1);
  const [displayedTime, setDisplayedTime] = useState(startTime * 60);
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
      setDisplayedTime(startRestingTime * 60);
    } else if (
      running === false &&
      workOrPauseState === "pause" &&
      displayedTime === 0
    ) {
      setWorkOrPauseState("work");
      setDisplayedTime(startTime * 60);
      setCurrentSession(currentSession + 1);
    }
  });

  if (currentSession === nbSessions && workOrPauseState === "pause") {
    return (
      <div>
        <img
          src="https://images.caradisiac.com/logos/4/6/6/4/194664/S0-fiat-chrysler-annonce-des-milliers-d-emplois-aux-etats-unis-111938.jpg"
          style={{ width: "1080px", height: "auto" }}
          alt="Trump"
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
          setWorkOrPauseState={setWorkOrPauseState}
          setCurrentSession={setCurrentSession}
          workOrPauseState={workOrPauseState}
        />

        <Setup
          setDisplayedTime={setDisplayedTime}
          setStartTime={setStartTime}
          startTime={startTime}
          setStartRestingTime={setStartRestingTime}
          startRestingTime={startRestingTime}
          nbSessions={nbSessions}
          setNbSessions={setNbSessions}
          workOrPauseState={workOrPauseState}
        />
        <AudioSection alarmRing={alarmRing}></AudioSection>
      </div>
    );
  }
}

export default App;
