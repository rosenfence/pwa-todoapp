import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

    :root {
      --vh: 100%;
      font-family: 'Nanum Gothic', sans-serif;
    }

    body {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      background-attachment: fixed;
      overflow: hidden;
      touch-action: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }

    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;
