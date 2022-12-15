import React, { useState } from "react";
import Clock from "./Clock";
import useToggle from "../hooks/useToggle";
import { useQueryClient } from "react-query";

const Toggle: React.FunctionComponent = () => {
  const { isActive: state, reset, toggle } = useToggle(true);
  const queryClient = useQueryClient();

  return (
    <div>
      <button onClick={() => queryClient.invalidateQueries()}>
        ResetQueryCache
      </button>
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
