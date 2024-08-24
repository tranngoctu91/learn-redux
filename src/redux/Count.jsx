import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counter";

const Count = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increment(5));
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Count;
