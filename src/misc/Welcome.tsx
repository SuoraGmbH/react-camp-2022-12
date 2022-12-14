import React from "react";

interface Props {
  city?: string;
}

const Welcome: React.FunctionComponent<Props> = ({ city = "Köln" }) => {
  return (
    <div>
      Hello <i>{city.toUpperCase()}</i>
    </div>
  );
};

export default Welcome;
