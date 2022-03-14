import "./styles.css";
import { useState } from "react";
export default function App() {
  const changeBg = () => {
    bgColor === "red" ? setBgColor("blue") : setBgColor("red");
  };
  // See the Twitter post component.
  //  It gives you an indicator of the character count. Replicate that behavior.
  const [bgColor, setBgColor] = useState("red");
  const [count, setCount] = useState(20);
  const [textColor, setTextColor] = useState("green");
  const changeHandler = (e) => {
    let charCount = 20;
    setCount(charCount - e.target.value.length);
    console.log(count);
    count < 7
      ? setTextColor("red")
      : count < 17
      ? setTextColor("orange")
      : setTextColor("green");
  };

  return (
    <div className="App">
      <h2 style={{ backgroundColor: bgColor }}>
        start editing to see some magic happen!
      </h2>
      <button onClick={changeBg}>Toggle</button> <br /> <br /> <br />
      <input onInput={changeHandler} type="text" />
      <p style={{ color: textColor }}>{count}</p>
    </div>
  );
}
