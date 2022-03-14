import "./styles.css";
import { useState } from "react";
export default function App() {
  const changeBg = () => {
    bgColor === "red" ? setBgColor("blue") : setBgColor("red");
  };

  const [bgColor, setBgColor] = useState("red");

  return (
    <div className="App">
      <h2 style={{ backgroundColor: bgColor }}>
        start editing to see some magic happen!
      </h2>
      <button onClick={changeBg}>Toggle</button>
    </div>
  );
}
