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
  //Any signup form, password reset form has this functionality.
  //  Take two passwords from user. Show error only if both passwords don't match.

  const [validationText, setValidationText] = useState(
    "Please Re-enter the exact password"
  );
  const [firstInput, setFirstInput] = useState("");
  const [validationColor, setValidationColor] = useState("red");
  const firstInputHandler = (e) => {
    setFirstInput(e.target.value);
  };
  const validaitonHandler = (e) => {
    if (firstInput === e.target.value) {
      setValidationColor("green");
      setValidationText("Now you can reset the password");
    } else {
      setValidationColor("red");
      setValidationText("Please Re-enter the exact password");
      style.display = "none";
    }
  };
  const [numericValidationColor, setNumericValidationColor] = useState("black");
  //Password should contain a number. Show error if user misses character.
  const [numericInput, setNumericInput] = useState(
    "Please enter strong password"
  );

  const numericChecker = (e) => {
    if (e.target.value.match(/\d/)) {
      // Here "\d" gets numbers from 0-9 mentioned inside he syntax  "//"
      setNumericInput("Strong Password");
      setNumericValidationColor("green");
    } else {
      setNumericInput("Weak Password");
      setNumericValidationColor("red");
    }
  };
  //   Add a submit button to password change field.
  // Disable submit button if passwords don't match
  // Clicking on submit should console the password field

  return (
    <div className="App">
      <h2 style={{ backgroundColor: bgColor }}>
        start editing to see some magic happen!
      </h2>
      <button onClick={changeBg}>Toggle</button> <br /> <br /> <br />
      <hr /> <br />
      <h2>The Twitter post component</h2>
      <input onChange={changeHandler} type="text" />
      <p style={{ color: textColor }}>{count}</p>
      <hr /> <br />
      <h2>The password reset form</h2>
      <input onChange={firstInputHandler} type="password" />
      <br /> <br />
      <input onChange={validaitonHandler} type="password" /> <br />
      <p style={{ color: validationColor }}>{validationText}</p>
      <button>Reset Password</button> <br /> <br /> <hr />
      <br /> <br /> <br />
      <h2>Alpha-numeric Password checker</h2>
      <input onChange={numericChecker} type="text" />
      <p style={{ color: numericValidationColor }}>{numericInput}</p>
    </div>
  );
}
