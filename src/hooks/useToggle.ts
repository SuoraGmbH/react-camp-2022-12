import { useState } from "react";

const useToggle = (initialState: boolean) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const setOn = () => setIsActive(true);
  const setOff = () => setIsActive(false);
  const reset = () => setIsActive(initialState);

  return { isActive, toggle, setOn, setOff, reset };
};

export default useToggle;
