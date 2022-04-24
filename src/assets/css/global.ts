import { createGlobalStyle, css } from 'styled-components';
import { color, background } from './color';
import { typography } from './typography';

export const bodyStyles = css`
  html,
  body,
  figure,
  ul,
  table,
  fieldset {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s2}px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${background.app};
    color: ${color.white};
  }
  body {
    overflow: hidden;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${bodyStyles}
`;
