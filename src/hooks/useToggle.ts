import { useState } from "react";

const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return [isActive, toggle];
};

export default useToggle;
