import React, { useState } from "react";
import { Window, WindowHeader, Button, Divider, Panel } from "react95";
import "./wizard.css";
import mandelSrc from "../../res/mandel.gif";
import IntroPage from "../pages/intro/intro.js";

const pages = [IntroPage, IntroPage, IntroPage];

const Wizard = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const isBackDisabled = pageIndex === 0;
  const isNextDisabled = pageIndex === pages.length - 1;

  const PageComponent = pages[pageIndex];

  return (
    <Window className="window">
      <div>
        <WindowHeader>
          <span>psytrance wizard 0.1</span>
        </WindowHeader>

        <div className="contents">
          <div className="wizard-panes">
            <Panel variant="well" className="image-well">
              <img className="wizard-img" src={mandelSrc} />
            </Panel>

            <div className="page-container">
              <PageComponent />
            </div>
          </div>

          <Divider />

          <div className="buttons">
            <Button
              disabled={isBackDisabled}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              <span className="nav-button">{"< Back"}</span>
            </Button>

            <Button
              disabled={isNextDisabled}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              <span className="nav-button">{"Next >"}</span>
            </Button>
          </div>
        </div>
      </div>
    </Window>
  );
};

export default Wizard;
