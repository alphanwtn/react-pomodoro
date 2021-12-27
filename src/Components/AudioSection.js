function AudioSection(props) {
  const { alarmRing } = props;

  const ringtone = new Audio("https://lasonotheque.org/UPLOAD/mp3/1373.mp3");

  // Un peu buggy, à améliorer
  if (alarmRing) {
    console.log("Driiiiiiiiiiiing");
    ringtone.play();
  } else {
    ringtone.pause();
    console.log("Stooooooooop");
  }

  if (alarmRing) {
    return (
      <div style={alarmRing ? { color: "green", fontWeight: "bold" } : null}>
        !!!
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default AudioSection;
