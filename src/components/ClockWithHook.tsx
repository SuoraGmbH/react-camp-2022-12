import React from "react";
import useCurrentTime from "../hooks/useCurrentTime";

const ClockWithHook: React.FunctionComponent = () => {
  const time = useCurrentTime();
  return <div>{time}</div>;
};

export default ClockWithHook;
