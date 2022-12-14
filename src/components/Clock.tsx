import React, { useEffect, useState } from "react";

const Clock: React.FunctionComponent = () => {
  const [timeString, setTimeString] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval läuft");
      setTimeString(new Date().toLocaleTimeString());
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{timeString}</div>;
};

export default Clock;
