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

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    padding: 0;
  }
  input:focus { outline: none; }
  input::-ms-clear { display: none; }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
