import React, { useEffect, useState } from "react";

const Clock: React.FunctionComponent = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return <div>{date.toLocaleTimeString()}</div>;
};

export default Clock;
