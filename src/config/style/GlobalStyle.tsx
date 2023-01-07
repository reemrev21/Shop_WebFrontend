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
  
  a {
    color: inherit; 
    text-decoration: none; 
    outline: none;
  };
  
  a:hover, a:active {
    text-decoration: none; 
    color: inherit; 
    background-color:transparent;
  };
  
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  };
`;

export default GlobalStyle;
