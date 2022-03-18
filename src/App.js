import "./styles.css";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { OutOfStockCard } from "./OutOfStockCard";
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

  const [addedItem, setAddedItem] = useState([]);

  //check if obj is present inside an array
  const checkDupicate = (item, cartArr) => {
    let isPresent = false;
    cartArr.map((itemFromCart) => {
      //checks if the cart going item's ID is same as the ID's of items already inside the cart Array
      if (itemFromCart.id === item.id) {
        isPresent = true;
      }
    });
    return isPresent; //returns the final value present or not.
  };

  const addItem = (item) => {
    if (checkDupicate(item, addedItem)) {
      setAddedItem((prev) => {
        const arr = prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        console.log(item, arr);
        return arr;
      });
    } else {
      setAddedItem((newArr) => [...newArr, { ...item, quantity: 1 }]);
    }
  };
  /* check the item id is present already
  if id  present then start increasing the count instead of showing it again
*/

  // ex8: switch tabs#
  // Make three components: Home, About, Profile.
  // Put some text in the components
  // Now, create three buttons with same name
  // Clicking on the button should show that component
  const [page, setPage] = useState(<Home />);
  const showHome = () => {
    setPage(<Home />);
  };
  const showAbout = () => {
    setPage(<About />);
  };
  const showProfile = () => {
    setPage(<Profile />);
  };
  // ex9: toast#
  // Create a Toast Component
  // Component should have two things
  // Text
  // Hide Button
  // Create a button show toast
  // Clicking on this button should show Toast
  // Clicking on hide button on toast should hide the toast
  const [display, setDisplay] = useState("none");
  const showToast = () => {
    setDisplay("block");
  };
  const hideSuccessToast = () => {
    setDisplay("none");
  };
  const hideWarningToast = () => {
    setDisplay("none");
  };
  const hideErrorToast = () => {
    setDisplay("none");
  };
  //   ex10: todo/strikethrough#
  // Write a TODO app
  // Add TODOs from input
  // Clicking on a TODO should complete it using strikethrough
  // Clicking again should remove the strikethrough.
  const [text, setText] = useState("");
  const createTodo = (e) => {
    setText(e.target.value);
    // console.log(text);
  };
  const [todoArr, setTodoArr] = useState([]);
  const addTodo = () => {
    setTodoArr((oldArr) => {
      return [...oldArr, text];
    });
    setText("");
  };
  const [strike, setStrike] = useState("none");
  const handleStrike = () => {
    if (strike === "none") {
      setStrike("line-through");
    } else {
      setStrike("none");
    }
  };
  //   ex11: dark mode#
  // Create a toggle dark mode button
  // Clicking on the button should change background and text color and toggle between dark and light mode

  let themeObj = {
    backgroundColor: "white",
    color: "black"
  };
  const [theme, setTheme] = useState(themeObj);
  const handleTheme = () => {
    if (theme.color === "black") {
      //As the two objects THEME & SET-THEME are having same reference we should never compare between them
      //instead check by comparing the property values inside the initial theme :)
      console.log("dark");
      setTheme({ ...themeObj, backgroundColor: "black", color: "grey" });
    } else {
      console.log(theme);
      setTheme(themeObj);
    }
  };
  //   ex12: like in a list
  // Render a list
  // Every item in the list should have a like button.
  const habbits = ["sleep", "eat", "code"];
  // ex13: out of stock (grey)#
  // Render a list of items from an array of objects.
  //  In that object, have a field outOfStock: true and depending on true/false grey out the out of stock object.
  //  Your component card should have this design built in as an additional class.
  const productArr = [
    { id: 0, title: "AWM", price: 1500, rating: 3, outOfStock: true },
    { id: 1, title: "M416", price: 2000, rating: 4, outOfStock: false },
    { id: 2, title: "MK14", price: 3000, rating: 3.5, outOfStock: true }
  ];
  const [stockColor, setStockColor] = useState("black");

  return (
    <div
      style={{
        fontSize: pageFont,
        color: theme.color,
        backgroundColor: theme.backgroundColor
      }}
      className="App"
    >
      <ul>
        {productArr.map((product) => (
          <OutOfStockCard {...product} />
        ))}
      </ul>
      <ul>
        {habbits.map((habbit) => (
          <li>
            {habbit} <button>Like</button> <br /> <br />
          </li>
        ))}
      </ul>
      <button onClick={handleTheme}>Change-Theme</button> <br /> <br />
      <input onChange={createTodo} value={text} />{" "}
      <button onClick={addTodo}>Add Todo</button> <br /> <br />
      <Todos
        todoList={todoArr}
        onClickTask={handleStrike}
        makeStrike={strike}
      />
      <button onClick={showHome}>HOME</button>
      <button onClick={showAbout}>ABOUT</button>
      <button onClick={showProfile}>PROFILE</button>
      {page}
      <button onClick={showToast}>
        <p>Show Toast</p>
      </button>
      <ToastSuccess
        display={display}
        color={textColor}
        onClick={hideSuccessToast}
      />
      <ToastWarning
        display={display}
        color="orange"
        onClick={hideWarningToast}
      />
      <ToastError display={display} color="red" onClick={hideErrorToast} />
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
function Home() {
  return (
    <div>
      <h1>This is home page component</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>This is About page component</h1>
    </div>
  );
}
function Profile() {
  return (
    <div>
      <h1>This is Profile page component</h1>
    </div>
  );
}
function ToastSuccess({ display, color, onClick }) {
  return (
    <div style={{ display: display }}>
      <h4 style={{ color: color }}>This is a Success toast </h4>{" "}
      <button onClick={onClick}>Hide Toast</button>
    </div>
  );
}
function ToastWarning({ display, color, onClick }) {
  return (
    <div style={{ display: display }}>
      <h4 style={{ color: color }}>This is a Warning toast </h4>{" "}
      <button onClick={onClick}>Hide Toast</button>
    </div>
  );
}
function ToastError({ display, color, onClick }) {
  return (
    <div style={{ display: display }}>
      <h4 style={{ color: color }}>This is an Error toast </h4>{" "}
      <button onClick={onClick}>Hide Toast</button>
    </div>
  );
}
function Todos({ todoList, onClickTask, makeStrike }) {
  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <li
            onClick={onClickTask}
            style={{ textDecoration: makeStrike }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div> // Doubt-to-ravi: while clicking on an item from mapping of an array
    //setting state for single item sets the state for all remaining items also
  );
}
