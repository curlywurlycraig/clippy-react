import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { styleReset } from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import "./App.css";
import Clippy from "./components/clippy/clippy";
import Wizard from "./components/wizard/wizard";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: #00807F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  input {
    font-family: 'ms_sans_serif';
  }
  h1 {
      font-size: 1.5em;
      margin-bottom: 1em;
  }
`;

const clippyMessage =
  "Looks like you're trying to make a psytrance banger. Would you like some help?";

function App() {
  const [clippyText, setClippyText] = useState(clippyMessage);

  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Wizard />
      </ThemeProvider>
      <Clippy speak={clippyText} character="Clippy" />
    </div>
  );
}

export default App;
