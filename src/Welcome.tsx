import React from "react";

interface Props {
  city: string;
}

function Welcome({ city }: Props): JSX.Element {
  return <h1>Hello {city}</h1>;
}

export default Welcome;
