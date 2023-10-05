import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false); //setting the initial state to false becuase the button should be off when the component first renders

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white"

  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
