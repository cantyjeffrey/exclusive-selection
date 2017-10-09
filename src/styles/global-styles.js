// @flow

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import { injectGlobal } from "styled-components";
import { normalize } from "polished";
// import "./fonts";

injectGlobal`
  ${normalize()}
  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 24px;
  }

  body {
    display: flex;
  }

  #root {
    flex: 1;
  }

  @media screen and (min-aspect-ratio: 2/3) {
    overflow: hidden;
  }
`;
