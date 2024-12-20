import React from "react";
import { useCounter } from "./useCounter";

function Inc() {
  const { count, incrementCount } = useCounter();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
}

export default Inc;