import React, { useEffect, useState } from "react";

interface Props {
  intervalInMs?: number;
}

const Clock: React.FunctionComponent<Props> = ({ intervalInMs = 300 }) => {
  const [timeString, setTimeString] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval läuft");
      setTimeString(new Date().toLocaleTimeString());
    }, intervalInMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalInMs]);

  return <div>{timeString}</div>;
};

export default Clock;
