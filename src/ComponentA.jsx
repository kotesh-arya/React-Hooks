import React from "react";
import { ComponentZ } from "./ComponentZ";
export function ComponentA() {
  return (
    <div>
      From component A
      <ComponentZ />{" "}
      <span>( Here componentZ is contained inside of componentA)</span>
    </div>
  );
}
