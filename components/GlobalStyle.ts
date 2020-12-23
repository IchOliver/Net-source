// Dependencies.
import {createGlobalStyle, css} from 'styled-components'
import {colors, forScreensGreaterThanMobileWidth} from '../utils'

// Global Style.
export const GlobalStyle = createGlobalStyle`

  /* Fonts — Common Sans. */
  @font-face {
    font-family: 'Common Sans';
    src: url('/fonts/CommonSans-Regular.otf') format('opentype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Common Sans';
    src: url('/fonts/CommonSans-Regular.otf') format('opentype');
    font-weight: 600;
  }

  /* Fonts — Helvetica Neue. */
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('/fonts/Helvetica55Roman_22439.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Helvetica N';
    src: url('/fonts/Helvetica65Medium_22443.ttf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Helvetica N';
    src: url('/fonts/Helvetica85Heavy_22449.ttf') format('truetype');
    font-weight: 600;
  }

  /* Fonts — Inter. */
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Light.woff') format('woff');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff') format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Medium.woff') format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Bold.woff') format('woff');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Black.woff') format('woff');
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 12px;
  }

  p {
    font-family: 'Common Sans';
  }

  /* h2, h4 {
    font-family: source-serif-pro,serif;
  } */

  ::-moz-selection { 
    background: #e5ddca; 
  }
  ::selection { 
    background: #e5ddca; 
  }
  
  html {
    background: #FFF;
  }

  html, body, #__next {
    height: 100%;
  }

  /* NProgress */
  #nprogress {
    pointer-events: none;
    
    .bar {
      background: ${colors.black};
      left: 0;
      height: 2px;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 6969;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .hyperlink {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .noSelect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Safari */
    -khtml-user-select: none;    /* Konqueror HTML */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently supported by Chrome and Opera */
  }

  .subtext {
    color: #666666;
  }

  .mobileNavigationMenu {
    background: rgba(255, 255, 255, 1);
    outline: none;
    opacity: 1;
  }

  /* Desktop. */
  ${forScreensGreaterThanMobileWidth(css`
    .mobileNavigationMenu {
      display: none;
    }
  `)}
`