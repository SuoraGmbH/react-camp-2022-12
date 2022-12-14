import React, { useEffect, useState } from "react";

const Clock: React.FunctionComponent = () => {
  const [timeString, setTimeString] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    setInterval(() => {
      setTimeString(new Date().toLocaleTimeString());
    }, 300);
  }, []);

  return <div>{timeString}</div>;
};

export default Clock;
