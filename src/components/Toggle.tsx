import React, { useState } from "react";
import Clock from "./Clock";

const Toggle: React.FunctionComponent = () => {
  const [state, setState] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? "On" : "Off"}
      </button>

      {state && <Clock />}
    </div>
  );
};

export default Toggle;
