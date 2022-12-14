import styled from "styled-components";
import { fontStyles } from "./font";

// Ggf. will man jetzt storybook verwende
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  ${fontStyles};
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default Button;
