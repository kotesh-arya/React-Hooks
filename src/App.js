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
    "Please confirm the password by entering it again"
  );
  const [firstInput, setFirstInput] = useState("");
  const [validationColor, setValidationColor] = useState("red");
  const [visibility, setVisibility] = useState(false);

  const firstInputHandler = (e) => {
    setFirstInput(e.target.value);
  };
  const validaitonHandler = (e) => {
    if (firstInput === e.target.value) {
      setValidationColor("green");
      setValidationText("Now you can reset the password");
      setVisibility(false);
    } else {
      setValidationColor("red");
      setValidationText("Please re-enter the exact password");
      setVisibility(true);
    }
    if (firstInput === null && e.target.value === null) {
      setValidationText("Please enter valid Input");
    }
  };
  //Password should contain a number. Show error if user misses character.
  const [numericInput, setNumericInput] = useState(
    "Please enter a strong password"
  );
  const [numericValidationColor, setNumericValidationColor] = useState("black");

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
  const [secondInput, setSecondInput] = useState("");
  const checkMatch = (e) => {
    setSecondInput(e.target.value);
    console.log(secondInput);
  };
  //////
  const [buttonText, setButtonText] = useState("show password");
  const [passwordType, setPasswordType] = useState("password");
  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setButtonText("Hide password");
    } else {
      setPasswordType("password");
      setButtonText("show password");
    }
  };

  //ex6: designer tool (mini figma) upto basic logic
  const [pageFont, setPageFont] = useState(16);
  const increaseSize = () => {
    setPageFont(pageFont + 8);
  };
  const decreaseSize = () => {
    setPageFont(pageFont - 8);
  };
  //   ex7: add to cart
  // Show a list of items with add to cart button
  // Clicking on the button should add that item to cart.
  // Show the cart below with items added.
  // Clicking on the same item twice should add more items in cart.
  // CHALLENGE : increase the count of the item in cart without adding it to list.
  const itemArr = [
    { id: 0, title: "Fruits", done: true },
    { id: 1, title: "Clothes", done: false },
    { id: 2, title: "Gadgets", done: false }
  ];
  // const addedItemsArr =[];
  // const addItem =()=> ;
  const [addedItem, setAddedItem] = useState([]);

  //check if obj is present inside an array
  const checkDupicate = (item, arrayOfObj) => {
    let isPresent = false;
    arrayOfObj.map((itemFromCart) => {
      if (itemFromCart.id === item.id) {
        isPresent = true;
      }
    });
    return isPresent;
  };

  const addItem = (item) => {
    if (checkDupicate(item, addedItem)) {
      setAddedItem((prev) => {
        // return [...prev, { ...item, quantity: prev.item.quantity + 1 }];
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity++ } : item
        );
      });
    } else {
      setAddedItem((newArr) => [...newArr, { ...item, quantity: 1 }]);
    }

    // const newArr = addedItem.map((itemFromCart) => {
    //   console.log(itemFromCart);
    //   if (item.id === itemFromCart.id) {
    //     const result = { ...itemFromCart, quantity: itemFromCart.quantity++ };
    //     setAddedItem(newArr =>{
    //       [...newArr,]
    //     })
    //     console.log(result);
    //     return result;
    //   } else {
    //     return item;
    //     //  console.log("add new item")
    //   }
    // });
    // setAddedItem(newArr);
    // console.log(newArr);
  };
  /* check the item id is present already
  if id  present then start increasing the count instead of showing it again
*/
  return (
    <div style={{ fontSize: pageFont }} className="App">
      {/* <Card title='kotesh' age={32} color='red'/>
      <Card title='kotesh' age={32}/>
      <Card title='kotesh' age={32}/>
      <Card title='kotesh' age={32}/> */}
      <ul>
        {itemArr.map((item) => {
          return (
            <li key={item.title} onClick={() => addItem(item)}>
              {item.title} <button>ADD TO CART</button> <br /> <br />
            </li>
          );
        })}
      </ul>
      <hr />
      <h5>Cart()</h5>
      <ul>
        {addedItem.map((item) => (
          <li>
            {item.title}
            {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={decreaseSize}>-</button> <br />
      <button onClick={increaseSize}>+</button>
      <h4>The current page font size is {pageFont}px </h4>
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
      <button onClick={checkMatch} disabled={visibility}>
        SUBMIT
      </button>{" "}
      <br /> <br /> <hr />
      <br /> <br /> <br />
      <h2>Alpha-numeric Password checker</h2>
      <input onChange={numericChecker} type={passwordType} />{" "}
      <button onClick={showPassword}>{buttonText}</button>
      <p style={{ color: numericValidationColor }}>{numericInput}</p>
    </div>
  );
}
// function Card({ title, age, color }) {
//   return (
//     <div>
//       <p>{age}</p>
//       <h1>{title}</h1>
//       <p>{color}</p>
//     </div>
//   );
// }
