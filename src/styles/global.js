import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';
import { defaultFontFamilyName, fontFace } from './fonts';
import ColorPalette from './colors';

export const GlobalWebStyle = createGlobalStyle`
  ${fontFace};

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    min-width: 'auto';
  }

  body {
    font-family: ${defaultFontFamilyName}, sans-serif;
    font-size: 13px;
    line-height: 1.3333333;
    letter-spacing: -0.5px;
    background: ${ColorPalette.GRAY_EEE};

    * {
      font-family: ${defaultFontFamilyName}, sans-serif;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    h2 {
      font-size: 18px;
      font-weight: bold;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }

    dl,
    dt,
    dd {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
    }

    #__next {
      width: 100%;
      min-height: 100%;
      color: ${ColorPalette.GRAY_333};
      display: flex;
      flex-direction: 'column';
    }
  }
`;

export { GlobalWebStyle as default };
