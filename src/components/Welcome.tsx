import React from "react";

interface Props {
  city?: string;
}

const Welcome: React.FunctionComponent<Props> = ({ city = "Köln" }) => {
  return <h1>Hello {city.toUpperCase()}</h1>;
};

export default Welcome;
