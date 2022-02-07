import { createGlobalStyle, css } from 'styled-components';
import JosefinSans from 'assets/fonts/JosefinSans-VariableFont_wght.woff2';

// prettier doesn't format createGlobalStyle
// https://github.com/styled-components/vscode-styled-components/issues/175
// workaround: https://github.com/prettier/prettier/pull/9025#issuecomment-678655928
const reset = css`
  @font-face {
    font-family: 'Josefin Sans';
    src: local('Josefin Sans'), local('Josefin Sans'),
      url(${JosefinSans}) format('woff2');
    font-weight: 400 700;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  html {
    font-size: 12px;
    transition: font-size 100ms ease;
  }

  @media (min-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (min-width: 1024px) {
    html {
      font-size: 16px;
    }
  }

  @media (min-width: 1200px) {
    html {
      font-size: 18px;
    }
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.conditional.color.background};
    background-image: ${({ theme }) =>
      `url(${theme.conditional['mobile-img']})`};
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 42.5%;
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: 'Josefin Sans', sans-serif;
  }

  #root {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0 2rem;
    padding-top: 5rem;
  }

  @media (min-width: 769px) {
    body {
      background-image: ${({ theme }) =>
        `url(${theme.conditional['desktop-img']})`};
    }
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

export default GlobalStyles;
