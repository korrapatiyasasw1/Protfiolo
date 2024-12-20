import React from "react";
import { useCounter } from "./useCounter";

function Dec() {
  const { count, decrementCount } = useCounter();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
}

export default Dec;