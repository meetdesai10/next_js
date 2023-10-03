"use client";
import React from "react";

export default function Buttons({Price}) {
  return (
    <div>
      <button 
        onClick={() => alert(`price is ${Price}$`)}
        style={{ cursor: "pointer" }}
      >
        click here
      </button>
    </div>
  );
}
