import React, { useState } from "react";
import Clock from "../Clock/Clock";
import useToggle from "./useToggle";

const Toggle: React.FunctionComponent = () => {
  const { isActive: state, reset, toggle } = useToggle(true);

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button
        onClick={() => {
          toggle();
        }}
      >
        {state ? "On" : "Off"}
      </button>

      {state && <Clock />}
    </div>
  );
};

export default Toggle;
