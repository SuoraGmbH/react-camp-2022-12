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
      <div style={{ border: "1px solid pink" }}>
        Togglable Clock: {state && <Clock />}
      </div>

      <div style={{ border: "1px solid green" }}>
        Slow-Down Clock: <Clock intervalInMs={state ? 5000 : 300} />
      </div>
    </div>
  );
};

export default Toggle;
