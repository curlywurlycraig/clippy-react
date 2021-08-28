import React from "react";
import { Window, WindowHeader, Button, Panel } from "react95";
import "./wizard.css";
import mandelSrc from "../../res/mandel.gif";

const Wizard = () => {
  return (
    <Window className="window">
      <div>
        <WindowHeader>
          <span>psytrance wizard 0.1</span>
        </WindowHeader>

        <div className="wizard-panes">
          <Panel variant="well" className="image-well">
            <img className="wizard-img" src={mandelSrc} />
          </Panel>
        </div>
      </div>
    </Window>
  );
};

export default Wizard;
