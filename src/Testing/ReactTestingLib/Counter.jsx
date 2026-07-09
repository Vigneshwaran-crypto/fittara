import React, { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(1)}>Add</button>
    </div>
  );
};

export default Counter;
