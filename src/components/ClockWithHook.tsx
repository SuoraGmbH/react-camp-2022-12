import React from "react";

const ClockWithHook: React.FunctionComponent = () => {
  const time = useCurrentTime();
  return <div>{time}</div>;
};
