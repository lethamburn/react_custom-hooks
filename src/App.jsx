import React, { useState } from "react";

import "./App.css";

const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(0);
  };

  return {
    value,
    increase,
    decrease,
    reset,
  };
};

const App = () => {
  const counter = useCounter();
  return (
    <div className="App">
      <div className="counter">
        <div>{counter.value}</div>
        <button onClick={counter.increase}>+</button>
        <button onClick={counter.decrease}>-</button>
        <button onClick={counter.reset}>reset</button>
      </div>
    </div>
  );
};

export default App;
