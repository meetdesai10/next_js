import React, { useState } from "react";

export default function Click() {
  let [name, setName] = useState("meet desai");
  function fruits() {
    setName("Arjun Baldha");
  }
  const Nested = () => {
    return (
        <>
            <h1>Hello i am nested component</h1>
        </>
    )
  };
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={fruits}>Click me</button>
      <Nested/>
      {Nested()}
    </div>
  );
}
