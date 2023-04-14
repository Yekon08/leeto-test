import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  html,
  body {
    font-family: 'SF Pro Display', sans-serif;
  }
`;

export default GlobalStyles;
