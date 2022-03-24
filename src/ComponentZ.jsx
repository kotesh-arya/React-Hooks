import React, { useContext } from "react";
import { UserContext } from "./App"; //imported the variable hook from APP (parent component) to use here with the "consumer" key

export function ComponentZ() {
  const propValue = useContext(UserContext); //assigning the props value passed from the context of parent component to a variable and using that inside the component
  console.log(propValue);
  return (
    <div>
      From component Z
      <br /> {propValue}
    </div>
  );
}
