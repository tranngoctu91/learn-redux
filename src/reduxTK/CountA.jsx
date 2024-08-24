import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "././counterSlice";
import { toggleDarkMode } from "./globalSlice";

const CountA = () => {
  const { count } = useSelector((state) => state.counter);
  const { darkMode } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increment({ value: 5 }));
  };

  const handleDarkMode = () => {
    dispatch(toggleDarkMode(!darkMode));
  };
  return (
    <div>
      <p>{count}</p>
      <p className={darkMode ? "bg-blue-400" : ""}>dark mode</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDarkMode}>Toggle</button>
    </div>
  );
};

export default CountA;
