import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *,
  html,
  body {
    font-family: 'SF Pro Display', sans-serif;
    box-sizing: border-box;
  };

  a {
  text-decoration: none;
  }
`;

export default GlobalStyles;
