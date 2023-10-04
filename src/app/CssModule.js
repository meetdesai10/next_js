"use client"
import React, { useState } from "react";
import Style from "../Css/Frist.module.css";
export default function CssModule() {
  let [color, setcolor] = useState(true);
  function changeColor() {
    setcolor(!color);
  }
  return (
    <div>
      <h1 className={color ? Style.red : Style.green}>Hello i am meet desai</h1>
      <h2 className={color ? Style.red : Style.green}>Hello i am meet desai</h2>
      <h3 className={color ? Style.red : Style.green}>Hello i am meet desai</h3>
      <button onClick={changeColor}>CLick here to change color</button>
    </div>
  );
}
