import { useEffect, useState } from "react";

const useCurrentTime = () => {
  const [timeString, setTimeString] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeString(new Date().toLocaleTimeString());
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return timeString;
};

export default useCurrentTime;
