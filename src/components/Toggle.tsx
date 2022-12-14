import React, { useState } from "react";
import Clock from "./Clock";
import useToggle from "../hooks/useToggle";

const Toggle: React.FunctionComponent = () => {
  const [state, toggle] = useToggle(true);

  return (
    <div>
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
