import React, { useReducer } from "react";
import reducer from "./ReducerCounter";

export default function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  function IncreaseCounter() {
    dispatch("Increase");
  }
  function DecreaseCounter() {
    dispatch("Decrease");
  }
  return (
    <>
      <button onClick={IncreaseCounter}>+</button>
      {count}
      <button onClick={DecreaseCounter}>-</button>
    </>
  );
}
