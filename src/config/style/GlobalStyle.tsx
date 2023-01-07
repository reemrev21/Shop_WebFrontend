import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  };
  
  body {
    margin: 0;
  };
  
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  };

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  };
`;

export default GlobalStyle;
