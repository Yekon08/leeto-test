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

  button {
    cursor: pointer;
  }

  button:focus-visible {
    outline: none;
  }

  .ReactModal__Overlay {
    z-index: 999 !important;

    opacity: 0;
    transition: opacity .2s ease;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
`;

export default GlobalStyles;
