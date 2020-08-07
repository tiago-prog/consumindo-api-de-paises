import { createGlobalStyle } from 'styled-components';
import breakPoints from './config/breakPoints';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background}
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 14px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    vertical-align: baseline;

    @media(${breakPoints.desktop}) {
      font-size: 16px
    }

    @media(${breakPoints.desktopL}) {
      font-size: 18px
    }
  }

  

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body {
    height: 100%;
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export default GlobalStyle;
